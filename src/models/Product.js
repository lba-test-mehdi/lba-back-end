import {Product} from "../entities/Product.js";
import mongoose from "mongoose";

const cleanProduct = (product) => {
    return {
        id: product._id,
        name: product.name,
        type: product.type,
        price: product.price,
        rating: product.rating,
        warranty_years: product.warranty_years,
        available: product.available
    }
}

export const createProduct = async (
    {
        name,
        type,
        price,
        rating,
        warranty_years,
        available
    }
) => {

    const product = new Product({
        name,
        type,
        price,
        rating,
        warranty_years,
        available
    });

    await product.save();

    return cleanProduct(product);
}

export const getProductById = async (id) => {

    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return null;
    }

    const product = await Product.find({_id: id});

    if (!product) {
        return null;
    }

    return cleanProduct(product[0]);
}

export const getProductByName = async (name) => {
    const products = await Product.find();
    const productsFound = [];

    // TODO view another way to do that (not optimal)
    [...products].forEach(product => {
        if (product.name.toLowerCase().includes(name.toLowerCase())) {
            productsFound.push(cleanProduct(product));
        }
    });

    return productsFound;
}

export const getAllProducts = async () => {
    const products = await Product.find();

    return [...products].map(cleanProduct);
}

export const editProduct = async (id, data) => {
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return null;
    }

    const product = await Product.findOneAndUpdate({_id: id}, data, {returnOriginal: false});

    if (!product) {
        return null;
    }

    return cleanProduct(product);

}

export const deleteProduct = async (id) => {
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return null;
    }

    const product = await Product.findOneAndDelete({_id: id});

    if (!product) {
        return null;
    }

    return cleanProduct(product);
}