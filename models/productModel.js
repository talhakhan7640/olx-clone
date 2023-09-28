import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription:{
        type: String,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
});

const productsDB = mongoose.connection.useDb("ProuctDatabase");
const productModel = productsDB.model("Products",productSchema);

export default productModel;