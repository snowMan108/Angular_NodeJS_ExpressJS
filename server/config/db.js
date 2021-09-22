const mongoose = require('mongoose');
require('dotenv').config({ path: 'config/variables.env' });

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('BD conectada');

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = conectarDB;