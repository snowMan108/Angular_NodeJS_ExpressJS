const mongoose = require('mongoose');
const CategoSchema = mongoose.Schema({
    id_bar: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: false,
    },
    foto: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Catego', CategoSchema);