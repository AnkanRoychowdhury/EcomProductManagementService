const category = require("../models/category");
const { ProductRepository, CategoryRepository } = require("../repository/index");
const CrudService = require("./crud-service");
const productRepository = new ProductRepository();
const categoryRepository = new CategoryRepository();
class ProductService extends CrudService {
    constructor() {
        super(productRepository);
    }

    async createProduct (data) {
        try {
            const result = await productRepository.create(data);
            const productId = result.dataValues.id;
            if(data.category){
                const res = await categoryRepository.find(data.category);
                if(!res){
                    const category = await categoryRepository.create({
                        name: data.category,
                        slug: generateSlug(data.category)
                    });
                    category.addProduct(productId);
                }
                else {
                    res.addProduct(productId);
                }
            }
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'ServerError',
                'Something went wrong',
                'Issue found during creation',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
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

const generateSlug = (slugName) => {
    slugName = slugName.toLowerCase(); // Convert the category name to lowercase
    slugName = slugName.replace(/\s+/g, '-'); // Replace spaces with hyphens
    slugName = slugName.replace(/[^a-z0-9-]/g, ''); // Remove special characters and non-alphanumeric characters
    slugName = slugName.substring(0, 50); // Truncate the slug to a reasonable length (e.g., 50 characters)
    slugName = slugName.replace(/-+$/, ''); // Remove trailing hyphens
    return slugName;
}

module.exports = ProductService;