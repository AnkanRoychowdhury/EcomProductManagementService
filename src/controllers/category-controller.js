const { response } = require("express");
const { CategoryService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const categoryService = new CategoryService();

const create = async (req,res) => {
    try {
        const response = await categoryService.create({
            name: req.body.name,
            slug: generateSlug(req.body.name)
        });
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the category',
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

const get = async (req,res) => {
    try {
        const response = await categoryService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched the category',
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
        const response = await categoryService.getAll();
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched all the category',
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
        const response = await categoryService.update(req.param.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated the category',
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
        await categoryService.destroy(req.param.id);
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
    destroy
}


const generateSlug = (slugName) => {
    slugName = slugName.toLowerCase(); // Convert the category name to lowercase
    slugName = slugName.replace(/\s+/g, '-'); // Replace spaces with hyphens
    slugName = slugName.replace(/[^a-z0-9-]/g, ''); // Remove special characters and non-alphanumeric characters
    slugName = slugName.substring(0, 50); // Truncate the slug to a reasonable length (e.g., 50 characters)
    slugName = slugName.replace(/-+$/, ''); // Remove trailing hyphens
    return slugName;
}