const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const productRouting = require('./routes/productRoutes');
const userRouting = require('./routes/userRoutes');
const barRouting = require('./routes/barRoutes');

const app = express();

conectarDB();

//app.set ('port', process.env.PORT || 4000)
const port = process.env.PORT || 4000

app.use(cors())

app.use(express.json());

app.use('/api/products', productRouting);
app.use('/api/user', userRouting);

app.listen(port, '0.0.0.0', () => { //app.get('port')
    console.log(`El servidor está corriendo perfectamente en el puerto https://localhost:${port}`)
})