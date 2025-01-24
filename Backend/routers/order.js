const express = require('express');
const { Createorder } = require('../controller/ordercontroller');

const routers = express.Router();

routers.route('/order').post(Createorder);

module.exports = routers;