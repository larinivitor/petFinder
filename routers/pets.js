const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.get('/test', (req,res) => {
    res.send('deu certo');
});

router.get('/add', (req, res) => {
    res.render('add');
});

//add pet via post
router.post('/add', (req, res) => {
    let {Nome, Raca, Idade, Peso, Cidade, Email} = req.body;

    Pet.create({
        Nome,
        Raca, 
        Idade, 
        Peso, 
        Cidade, 
        Email
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;