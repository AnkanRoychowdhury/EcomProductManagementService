const { ProductService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const productService = new ProductService();

const create = async (req,res) => {
    try {
        const response = await productService.createProduct({
            title: req.body.title,
            slug: generateSlug(req.body.title),
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            rating: req.body.rating,
        });
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the product',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const bulkCreate = async (req,res) => {
    try {
        const response = await productService.bulkCreate(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the products',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await productService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched the product',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await productService.getProducts(req.query);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched all the products',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const update = async (req,res) => {
    try {
        const response = await productService.update(req.param.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched the product',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const destroy = async (req,res) => {
    try {
        await productService.destroy(req.param.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the product',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

module.exports = {
    create,
    update,
    get,
    getAll,
    destroy,
    bulkCreate
}
















const generateSlug = (slugName) => {
    slugName = slugName.toLowerCase(); // Convert the category name to lowercase
    slugName = slugName.replace(/\s+/g, '-'); // Replace spaces with hyphens
    slugName = slugName.replace(/[^a-z0-9-]/g, ''); // Remove special characters and non-alphanumeric characters
    slugName = slugName.substring(0, 50); // Truncate the slug to a reasonable length (e.g., 50 characters)
    slugName = slugName.replace(/-+$/, ''); // Remove trailing hyphens
    return slugName;
}