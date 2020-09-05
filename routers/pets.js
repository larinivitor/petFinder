const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.get('/test', (req,res) => {
    res.send('deu certo');
})

//add pet via post
router.post('/add', (req, res) => {
    let {Raca, Idade, Peso, Cidade, Email} = req.body;

    Pet.create({
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