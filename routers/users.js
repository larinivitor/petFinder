const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/test', (req,res) => {
    res.send('deu certo');
})

//add pet via post
router.post('/add', (req, res) => {
    let {nome, email, senha, cidade} = req.body;

    User.create({
        nome,
        email,
        senha,
        cidade
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;