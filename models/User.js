const Sequelize = require('sequelize');
const db = require('../db/connection');

const User = db.define('users', {
    nome: {
        type: Sequelize.STRING,    
    },
    email: {
        type: Sequelize.STRING,    
    },
    senha: {
        type: Sequelize.STRING,    
    },
    cidade: {
        type: Sequelize.STRING,    
    },
});

module.exports = User;