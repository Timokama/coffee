// models/user.js

const { DataTypes } = require('sequelize');
const db = require('../config/config.js')

const bcrypt = require('bcryptjs');

const User = db.define('users', {
    username: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = User;