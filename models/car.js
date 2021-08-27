require("dotenv").config();
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    car: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        min: 2,
        max: 500,
    }
})


module.exports = mongoose.model("car", carSchema);
