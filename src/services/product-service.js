const { ProductRepository } = require("../repository/index");
const CrudService = require("./crud-service");
const productRepository = new ProductRepository();
class ProductService extends CrudService {
    constructor() {
        super(productRepository);
    }

    async getProducts (filter) {
        try {
            const result = await productRepository.getProducts(filter);
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'ServerError',
                'Something went wrong',
                'Issue found during fetching data',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = ProductService;