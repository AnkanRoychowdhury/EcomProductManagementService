const express = require("express");
const { ProductController } = require("../../../controllers/index");

const router = express.Router();

router.get('/products/:id',ProductController.get);
router.get('/products',ProductController.getAll);

/**
 * TODO
 * Create a middleware to validate user before create and update
 * Check user has the access to create or update (Only admin & vendor will have the access)
 */
router.post('/products',ProductController.create);
router.put('/products/:id',ProductController.update);

/**
 * TODO
 * Create a middleware to validate user before delete
 * Check user has the access to delete or not (Only admin will have the access)
 */
router.delete('/products/:id',ProductController.destroy);


module.exports = router;