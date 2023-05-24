const AxiosError = require('../Errors/AxiosError');
const { logger } = require('../Logger/logger');

module.exports.errorHandler = async (err, req, res, next) => {
    console.log("In Middlware");
    const parameters = { "body ": { ...req.body }, "params": { ...req.params }, "query": { ...req.query } };  
    var errorObject = {
        "errorInUrl" : `${req.method} ${req.headers.host} ${req.url}`,
        "inputParams" : parameters,
        "controllerName" : err.controllerName,
        "functionName" : err.functionName,
        "errorMessage" : err.message,        
        "stackTrace" : err.stack,
    };

    if (err instanceof AxiosError) {
        console.log("In Axios Error");                        
        res.status(err.statusCode).json({ error: err.message, data: err.data.trim() });
    } else {        
        console.log("In Other Errors");                                          
        res.status(500).json({ error: 'Internal Server Error' });
    }

    logger.error(JSON.stringify(errorObject));

}
