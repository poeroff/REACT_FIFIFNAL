const mongoose = require("mongoose");

const Item = new mongoose.Schema({
    seq: {
        type: Number,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    categoryDetail: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
    },
    clickCnt: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
    itemDetail: {
        type: Text,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("item", Item)