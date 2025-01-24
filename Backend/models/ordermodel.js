const mongoose = require('mongoose');

const orderScheme = new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:String,
})

const ordermodel = new mongoose.model('order',orderScheme);

module.exports = ordermodel;