import express from 'express';
import { sellProductController, fetchProductsController } from '../controller/products.js';

const productRoute = express.Router();

productRoute.get("/" , fetchProductsController);
productRoute.post("/sell-product", sellProductController);

export default productRoute;
