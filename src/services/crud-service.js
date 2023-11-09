const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/errors/index");

class CrudService {

    constructor (repository) {
        this.repository = repository;
    }

    async create (data) {
        try {
            const result = await this.repository.create(data);
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

    async bulkCreate (data) {
        try {
            const result = await this.repository.bulkCreate(data);
            return result;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw {error};
        }
    }

    async destroy (id) {
        try {
            const response = await this.repository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'ServerError',
                'Something went wrong',
                'Issue found during deletion',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update (id,data) {
        try {
            const result = await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'ServerError',
                'Something went wrong',
                'Issue found during update',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get (id) {
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                error.name,
                error.message,
                error.explanation,
                error.statusCode
            );
        }
    }

    async getAll () {
        try {
            const result = await this.repository.getAll();
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

module.exports = CrudService;