const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        explanation = 'Something went wrong',
        statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
    )
    {
        super();
        this.name = name,
        this.message = message,
        this.explanation = explanation,
        this.statusCodes = statusCodes
    }
}

module.exports = AppError;