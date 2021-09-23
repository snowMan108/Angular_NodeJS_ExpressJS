const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const slug = require('slug');

const CategoSchema = mongoose.Schema({
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
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

CategoSchema.plugin(uniqueValidator, { message: 'is already taken' });

CategoSchema.pre('validate', function(next) {
    if (!this.slug) {
        this.slugify();
    }

    next();
});

CategoSchema.methods.slugify = function() {
    this.slug = slug(this.nom) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);

};

module.exports = mongoose.model('Catego', CategoSchema);