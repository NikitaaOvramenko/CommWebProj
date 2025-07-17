require('dotenv').config()

const express = require('express'); //for http requests

const sequelize = require('./db'); //for database connection and manipulation

const PORT = process.env.PORT || 5000; // Port

const models = require('./models/models'); //Database models

const cors = require('cors');

const app = express(); 
 
const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync() // add parameter {force:true} if you need to recreate database
        app.listen(PORT,() => console.log(`Server Started On Port ${PORT}`));
    
    } catch (e) {
        console.log(e);
    }
}

start();

