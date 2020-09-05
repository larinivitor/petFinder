const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pet = db.define('job', {
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