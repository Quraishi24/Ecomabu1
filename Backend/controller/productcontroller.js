const productModel = require('../models/productModel');
const Productmodel = require('../models/productModel');

exports.getProducts = async (req,res,next) => {

    const query = req.query.keyword ?{ name: {
        $regex : req.query.keyword ,
        $options: 'i',
    }}:{}

    const products = await Productmodel.find(query);

        res.json({
            sucess: true,
            message:" all the products",
            products
        }) 
    
}

exports.getSingleproduct =  async (req,res,next) =>{

    try{
        const product = await productModel.findById(req.params.id);

        res.json({
            sucess: true, 
            message:" single products",
            product
        })

    }catch(error) {
        res.status(404).json({
            sucess: false, 
            message:"Something went wrong",
            // error.message
        })
    }
}