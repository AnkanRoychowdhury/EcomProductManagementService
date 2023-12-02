const { Category } = require("../models/index");
const CrudRepository = require("./crud-repository");

class CategoryRepository extends CrudRepository {
    constructor(){
        super(Category);
    }

    async find(category){
        try {
            const result = await Category.findOne({
                where: {
                    name: category
                }
            });
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to find category',
                'Unable to find please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = CategoryRepository;