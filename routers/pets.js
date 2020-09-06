const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.get('/test', (req,res) => {
    res.send('deu certo');
});

// form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
});

// detalhe do pet
router.get('/view/:id', (req, res) => Pet.findOne({
    where: {id: req.params.id}
  }).then(pet => {
  
    res.render('view', {
      pet
    });
  
  }).catch(err => console.log(err)));

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