const express = require('express');
const app = express();
const router = express.Router();
const User = require('../models/User');
const Sequelize = require('sequelize');
const Handlebars = require('handlebars');
const Op = Sequelize.Op;


router.get('/test', (req, res) => {
    res.send('deu certo');
})

// form da rota de envio
router.get('/addUser', (req, res) => {
    res.render('addUser');
});

//add pet via post
router.post('/add', (req, res) => {
    let { nome, email, senha, cidade } = req.body;

    User.create({
        nome,
        email,
        senha,
        cidade
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
});

router.get('/login', (req, res) => {

    let search = req.query.email;
    let search2 = req.query.senha;
    start(search, search2);
    res.redirect('/');
});


const start = async function (a, b) {

    const project = await User.findOne({
        where: {
            email: { [Op.eq]: a },
            senha: { [Op.eq]: b },
        }
    });

    if (project === null) {
        console.log('Not found!');
    } else {
        
          console.log('Found it!');

          Handlebars.registerHelper('loggedIn', function (value) {
            return true;
          });
    }
}


router.get('/logout', (req, res) => {

    let search = req.query.email;
    let search2 = req.query.senha;

    Handlebars.registerHelper('loggedIn', function (value) {
        return false;
      });

    res.redirect('/');
});



module.exports = router;

