const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/APPBAR', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('BD conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = conectarDB;