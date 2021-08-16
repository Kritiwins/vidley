const mongoose = require('mongoose');
const Joi = require('joi');

   const Genre = mongoose.model('genre',new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }  
}));

function validateGenres(genre){
    const schema = {
        name : Joi.string().min(5).required()
     };

    return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenres;