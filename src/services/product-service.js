const { ProductRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class ProductService extends CrudService {
    constructor() {
        const productRepository = new ProductRepository();
        super(productRepository);
    }
}

module.exports = ProductService;