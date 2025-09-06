const  mongoose  = require("mongoose");


const holdingsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss : Boolean,
})

module.exports = {holdingsSchema};