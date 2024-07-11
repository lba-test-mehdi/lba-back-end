import getAllProducts from "../controllers/getAllProducts.js";
import getOneProductById from "../controllers/getOneProductById.js";
import getOneProductByName from "../controllers/getOneProductByName.js";
import createProduct from "../controllers/createProduct.js";
import updateProduct from "../controllers/updateProduct.js";
import deleteProduct from "../controllers/deleteProduct.js";

/**
 * Manage all routes
 * @param {Router} app Express
 * @returns {Promise<void>}
 */
export const manageRoutes = async (app) => {
    app.get("/all", await getAllProducts);
    app.get("/id/:id", await getOneProductById);
    app.get("/name/:name", await getOneProductByName);
    app.post("/create", await createProduct);
    app.put("/update/:id", await updateProduct);
    app.delete("/delete/:id", await deleteProduct);
}

