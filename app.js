const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express eta ok na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended:false}));

//db connection
db.authenticate().then(() => {
    console.log("Conectou ao banco com sucesso")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar")
});

//routes
app.get('/', (req, res) => {
    res.send("Esta funcionando");
} );

//pets routes
app.use('/pets', require('./routers/pets'));
