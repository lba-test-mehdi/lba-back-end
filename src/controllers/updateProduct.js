import {checkRequestKey} from "../utils/requestUtils.js";
import {editProduct} from "../models/Product.js";

export default async (req, res) => {
    if (!checkRequestData(req, res)) {
        return;
    }

    const { id } = req.params;
    const body = req.body;

    const dataToUpdate = getDataToUpdate(body);

    console.table(dataToUpdate);

    const data = await editProduct(id, dataToUpdate);

    if (!data) {
        res.status(404).json({
            error: "Not Found",
            message: "Product not found"
        });
        return;
    }

    res.status(200).json({
        message: "Product edited",
        product: data
    });
}

const getDataToUpdate = (body) => {
    const dataToUpdate = {};

    if (body.name) {
        dataToUpdate.name = body.name;
    }

    if (body.type) {
        dataToUpdate.type = body.type;
    }

    if (body.price) {
        dataToUpdate.price = body.price;
    }

    if (body.rating) {
        dataToUpdate.rating = body.rating;
    }

    if (body.warranty_years) {
        dataToUpdate.warranty_years = body.warranty_years;
    }

    if (body.available) {
        dataToUpdate.available = body.available;
    }

    return dataToUpdate;
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