const mongoose = require('mongoose');

const ValorationSchema = mongoose.Schema({
    id_bar: {
        type: String,
        required: true
    },
    valorations: [{
        id_user: {
            type: String,
            required: false
        },
        rate: {
            type: Number,
            required: false
        },
        descr: {
            type: String,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }]
}, {
    timestamps: false
});

module.exports = mongoose.model('Valoration', ValorationSchema);