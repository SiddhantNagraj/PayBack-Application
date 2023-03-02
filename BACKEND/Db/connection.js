const url = require('../utils/env');
const mongoose = require('mongoose');
mongoose.connect(url.mongo);


// Connection to MongoDB using Mongoose
mongoose.connection.on('open',()=>{
    console.log("connected to database");
})

module.exports = mongoose;