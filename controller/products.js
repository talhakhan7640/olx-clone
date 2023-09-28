import productModel from "../models/productModel.js";

export const sellProductController = async (request, response) => {
  const productName = request.body.productName;
  const productDescription = request.body.productDescription;
  const productPrice = request.body.productPrice;
  const productCategory = request.body.productCategory;

  var product = productModel({
    productName: productName,
    productDescription: productDescription,
    productPrice: productPrice,
    productCategory: productCategory,
  });

  product
    .save()
    .then((result) => {
      response.status(201).send({
        message: "Your product has been listed for selling!",
        result,
      });
    })
    .catch((error) => {
      response.status(500).send({
        message: "Something went wrong! Product could not be listed!",
        error,
      });
    });
};
