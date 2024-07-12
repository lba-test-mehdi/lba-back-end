import {model, Schema} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["phone", "book"], // This is a possible example for values that can be used (In the data, we have only "phone" value)
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    warranty_years: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
})

export const Product = model("Product", ProductSchema);