const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            image:String,
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numberofreviews:String,
    createdAt: Date,
})

const productModel = new mongoose.model('products',productSchema);

module.exports = productModel;