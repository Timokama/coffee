// config.js

const Sequelize = require('sequelize');

const db = new Sequelize('Digital', 'root', 'secret123', {
    host: 'localhost',
    dialect: 'mysql',
});

// sync Sequelize models with database
db.sync().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Error, Database not Created!!', err);
});
module.exports = db;