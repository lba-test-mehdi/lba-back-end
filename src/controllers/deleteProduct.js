import {checkRequestKey} from "../utils/requestUtils.js";
import {deleteProduct} from "../models/Product.js";

export default async (req, res) => {
    if (!checkRequestData(req, res)) {
        return;
    }

    const { id } = req.params;

    const data = await deleteProduct(id);

    if (!data) {
        res.status(404).json({
            error: "Not Found",
            message: "Product not found"
        });
        return;
    }

    res.status(200).json({
        message: "Product deleted",
        product: data
    });
}

const checkRequestData = (req, res) => {
    if (!checkRequestKey(req.params, "id")) {
        res.status(400).json({
            error: "Bad Request",
            message: "Missing required fields"
        });
        return false;
    }

    return true;
}