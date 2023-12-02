const CrudRepository = require("./crud-repository");

const { Product, ProductImage, Category } = require('../models/index');
const { AppError } = require("../utils/errors/index");
const { StatusCodes } = require("http-status-codes");
const {Op} = require('sequelize');

class ProductRepository extends CrudRepository {
    constructor(){
        super(Product);
    }

    // async create (data) {
    //     try {
    //         const result = await Product.create(data);
    //         const productId = result.dataValues.id;
    //         await ProductImage.findOrCreate({
    //             where: { ProductId: productId }
    //         });
    //         result.addProductImage(productId)
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //         throw new AppError(
    //             'RepositoryError',
    //             'Unable to create',
    //             'Unable to create please try later',
    //             StatusCodes.INTERNAL_SERVER_ERROR
    //         );
    //     }
    // }

    async getProducts (filter) {
        try {
            const filterObj = this.#productFilter(filter);
            let result = {};
            if(filterObj.category){
                const category = await Category.findOne({
                    where: {
                        name: filterObj.category
                    }
                });
                const data = await category.getProducts();
                Object.assign(result,data);
                return result;
            }
            result = await Product.findAll({
                include: [Category],
            });
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to get all the details',
                'Unable to get please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    #productFilter(data){
        let filter = {};
        if(data.categoryName){
            Object.assign(filter,{
                category: data.categoryName
            });
        }
        return filter;
    }
}

module.exports = ProductRepository;