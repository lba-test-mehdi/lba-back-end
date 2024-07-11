import {checkRequestKey} from "../utils/requestUtils.js";
import {getProductByName} from "../models/Product.js";

export default async (req, res) => {
    if (!checkRequestData(req, res)) {
        return;
    }

    const {name} = req.params;

    const data = await getProductByName(name);

    if(!data) {
        res.status(404).json({
            error: "Not Found",
            message: "Product not found"
        });
        return;
    }

    const message = data.length === 1 ? "product" : "products";

    res.status(200).json({
        message: `${data.length} ${message} found`,
        products: [
            ...data
        ]
    });
}

const checkRequestData = (req, res) => {
    if (!checkRequestKey(req.params, "name")) {
        res.status(400).json({
            error: "Bad Request",
            message: "Missing required fields"
        });
        return false;
    }

    return true;
}
