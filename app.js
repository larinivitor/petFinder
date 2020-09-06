const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');

const Pet = require('./models/Pet');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express eta ok na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended:false}));

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//db connection
db.authenticate().then(() => {
    console.log("Conectou ao banco com sucesso")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar")
});

//routes
app.get('/', (req, res) => {

    let search = req.query.pet;
    let query  = '%'+search+'%'; 
  
    if(!search) {
      Pet.findAll({order: [
        ['createdAt', 'DESC']
      ]})
      .then(pets => {
    
        res.render('index', {
          pets
        });
    
      })
      .catch(err => console.log(err));
    } else {
      Pet.findAll({
        where: {raca: {[Op.like]: query}},
        order: [
          ['createdAt', 'DESC']
      ]})
      .then(pets => {
        console.log(search);
        console.log(search);
    
        res.render('index', {
          pets, search
        });
    
      })
      .catch(err => console.log(err));
    }
  
    
  });

//pets routes
app.use('/pets', require('./routers/pets'));

//user routes
app.use('/user', require('./routers/user'));