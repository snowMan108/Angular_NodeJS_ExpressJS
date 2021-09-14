const mongoose = require('mongoose');
const ProdSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    preu: {
        type: Number,
        required: true,
    },
    desc: String,
    idbar: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Prod', ProdSchema);