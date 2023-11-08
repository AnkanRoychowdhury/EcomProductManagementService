const CrudService = require('./crud-service');
const { CategoryRepository } = require('../repository/index')

class CategoryService extends CrudService {
    constructor(){
        const categoryRepository = new CategoryRepository();
        super(categoryRepository);
    }
}

module.exports = CategoryService;