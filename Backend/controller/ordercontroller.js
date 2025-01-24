const ordermodel = require("../models/ordermodel");
const productModel = require("../models/productModel");

exports.Createorder =  async (req,res,next) => {

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item)=>( acc + item.product.price * item.qty),0)).toFixed(3)
    // console.log(amount);
    const status = 'pending';

    const order = await ordermodel.create({
        cartItems,
        amount,
        status,
    })

    cartItems.forEach( async (item)=>{
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })

    res.json({
        success : true,
        message : "order works",
        order
    });
}