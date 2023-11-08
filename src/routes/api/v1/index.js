const express = require("express");
const { ProductController, CategoryController } = require("../../../controllers/index");

const router = express.Router();

router.get('/products/:id',ProductController.get);
router.get('/products',ProductController.getAll);

router.get('/categories/:id',CategoryController.get);
router.get('/categories',CategoryController.getAll);
/**
 * TODO
 * Create a middleware to validate user before create and update
 * Check user has the access to create or update (Only admin & vendor will have the access)
 */
router.post('/products',ProductController.create);
router.put('/products/:id',ProductController.update);

router.post('/categories',CategoryController.create);
router.put('/categories/:id',CategoryController.update);

/**
 * TODO
 * Create a middleware to validate user before delete
 * Check user has the access to delete or not (Only admin will have the access)
 */
router.delete('/products/:id',ProductController.destroy);

router.delete('/categories/:id',CategoryController.destroy);


module.exports = router;