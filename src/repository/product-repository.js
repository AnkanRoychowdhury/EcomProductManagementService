const CrudRepository = require("./crud-repository");
const { Product,ProductImage } = require('../models/index');

class ProductRepository extends CrudRepository {
    constructor(){
        super(Product);
    }

    async create (data) {
        try {
            const result = await Product.create(data);
            const productId = result.dataValues.id;
            await ProductImage.findOrCreate({
                where: { ProductId: productId }
            });
            result.addProductImage(productId)
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to create',
                'Unable to create please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = ProductRepository;