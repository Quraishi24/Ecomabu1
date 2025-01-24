const express = require('express');
const { getProducts, getSingleproduct } = require('../controller/productcontroller');
const routers = express.Router();

routers.route('/products').get(getProducts);
routers.route('/product/:id').get(getSingleproduct);

module.exports = routers;