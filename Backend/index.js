const express = require('express');

const app = express();

const dotenv = require('dotenv');

const path = require('path');

const cors = require('cors');

const connectionDatabase = require('./config/connectdatabase');

dotenv.config({path : path.join(__dirname,'./config','./config.env') });

const products = require('./routers/product')
const order = require('./routers/order');

connectionDatabase()

app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',order);

app.listen(process.env.PORT,()=>{
    console.log(`server listing in port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})