const mongoose = require('mongoose');
const ProdSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    id_bar: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    },
    id_cat: {
        type: String,
        required: true,
    },
    preu: {
        type: Number,
        required: true,
    },
    stock: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProdSchema);