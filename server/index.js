require('dotenv').config()

const express = require('express'); //for http requests
const sequelize = require('./db'); //for database connection and manipulation
const PORT = process.env.PORT || 5000; // Port
const models = require('./models/models'); //Database models
const cors = require('cors'); //communication with backend using frontend
const router = require('./routes/index');//importing main router
const errorHandler = require('./middleware/ErrorHandilngMiddleware');//error handling middleware


const app = express(); //app
//Mount cors
app.use(cors());
//Mount json
app.use(express.json());
//Mount main router
app.use('/api',router);
app.use(errorHandler)


const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync(); // add parameter {force:true} if you need to recreate database
        app.listen(PORT,() => console.log(`Server Started On Port ${PORT}`));
    
    } catch (e) {
        console.log(e);
    }
}

start();

