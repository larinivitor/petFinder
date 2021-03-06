const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pet = db.define('pets', {
    Nome: {
        type: Sequelize.STRING,    
    },
    Raca: {
        type: Sequelize.STRING,    
    },
    Idade: {
        type: Sequelize.STRING,    
    },
    Peso: {
        type: Sequelize.STRING,    
    },
    Cidade: {
        type: Sequelize.STRING,    
    },
    Email: {
        type: Sequelize.STRING,    
    },
});

module.exports = Pet;