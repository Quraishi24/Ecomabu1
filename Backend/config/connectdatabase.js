const mongoose = require('mongoose');

const connectionDatabse = () =>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("connect to database successfully");
    })
}

module.exports = connectionDatabse;