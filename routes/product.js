import express from 'express';
import { sellProductController } from '../controller/products.js';

const productRoute = express.Router();

productRoute.post("/sell-product", sellProductController);

export default productRoute;