import {checkRequestKey} from "../utils/requestUtils.js";
import {getAllProducts, getProductByName} from "../models/Product.js";

export default async (req, res) => {

    const data = await getAllProducts();

    res.status(200).json(data);
}
