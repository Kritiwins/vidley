const mongoose = require('mongoose');
const Joi = require('joi');
const { isJoi } = require('joi/lib/types/lazy');

const Customer = mongoose.model('customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        maxlength: 10
    }
}));

async function validateCustomers(customer){
    const schema = {
        name: Joi.String().min(5).max(50).required(),
        phone: Joi.Number().min(10).max(10).required(),
        isGold: Joi.Boolean
    }
    return await Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomers;