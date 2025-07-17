require('dotenv').config()

const express = require('express'); //for http requests

const sequelize = require('./db'); //for database connection and manipulation

const PORT = process.env.PORT || 5000; // Port

const models = require('./models/models'); //Database models

const cors = require('cors'); //communication with backend using frontend

const router = require('./routes/index');

const app = express(); 
app.use(cors());
app.use(express.json());
app.use('/api',router);





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

