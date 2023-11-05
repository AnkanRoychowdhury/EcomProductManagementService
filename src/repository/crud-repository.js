const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/errors/index");
class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create (data) {
        try {
            const result = await this.model.create(data);
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

    async update (Id,data) {
        try {
            const result = await this.model.update(data,{
                where: {
                    id: Id
                }
            });
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to update',
                'Unable to update please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async partialUpdate (Id) {
        try {
            
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to update',
                'Unable to update please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async destroy (Id) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: Id
                }
            });
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to delete the details',
                'Unable to delete please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get (Id) {
        try {
            const result = await this.model.findByPk(Id);
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to Get the details',
                'Unable to get please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getAll () {
        try {
            const result = await this.model.findAll();
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
}

module.exports = CrudRepository;

