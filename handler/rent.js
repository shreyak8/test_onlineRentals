const RentService = require('../services/RentService');
const loggerCls = require('../util/logger/logger');
const ValidatorCls = require('../util/validator/validator');
const dbClient = require('../util/dbConnect');
dbClient.getConnection();


const addUpdateUser = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let logger = loggerCls.initLogger(event.requestContext.requestId, context.awsRequestId);
    const rentService = new RentService (logger);
    const validator = new ValidatorCls(logger);

    let body = JSON.parse(event.body);
    //validate input before serve
    if (validator.validateAddUser(body)) {
        return await rentService.addUpdateUser(body);
    } else {
        return errorResponse();
    }
}

const addUpdateRental = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let logger = loggerCls.initLogger(event.requestContext.requestId, context.awsRequestId);
    const rentService = new RentService (logger);
    const validator = new ValidatorCls(logger);

    let body = JSON.parse(event.body);
    //validate input before serve
    if (validator.validateRental(body)) {
        return await rentService.addUpdateRental(body);
    } else {
        return errorResponse();
    }
}


const bookRental = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let logger = loggerCls.initLogger(event.requestContext.requestId, context.awsRequestId);
    const rentService = new RentService (logger);
    const validator = new ValidatorCls(logger);

    let body = JSON.parse(event.body);
    //validate input before serve
    if (validator.validateBookRental(body)) {
        return await rentService.bookRental(body);
    } else {
        return errorResponse();
    }
}




const errorResponse = () => {
    let response = {};
    response.statusCode = 200;
    response.headers = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };
    response.body = JSON.stringify({
        success: false,
        errorFor: {
            errorCode: "REQUEST_VALIDATION_ERR",
            errorMessage: "Some parameters are missing or invalid"
        }
    });
    return response;
}

module.exports = {
    addUpdateUser,
    addUpdateRental,
    bookRental
};
