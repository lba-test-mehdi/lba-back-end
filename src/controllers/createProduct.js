import {createProduct} from "../models/Product.js";
import {checkRequestKey} from "../utils/requestUtils.js";

export default async (req, res) => {

    if(!checkRequestData(req, res)) {
        return;
    }

    const productData = req.body;

    const data = await createProduct(productData);

    res.status(201).json({
        message: "Product created successfully",
        product: data
    });
}

const checkRequestData = (req, res) => {
    if(!checkRequestKey(req.body, "name", "type", "price", "rating", "warranty_years", "available")) {
        res.status(400).json({
            error: "Bad Request",
            message: "Missing required fields"
        });
        return false;
    }

    return true;
}