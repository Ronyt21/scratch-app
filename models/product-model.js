const mongoose = require('mongoose')



const productSchema = mongoose.Schema({
    image: String,
    name : String,
    price : String,
    discount: {
        type: Array,
        default: []
    },
    bgcolor: Boolean,
    panelcolor: String,
    textcolor : String
});

module.exports = mongoose.model("product", productSchema)