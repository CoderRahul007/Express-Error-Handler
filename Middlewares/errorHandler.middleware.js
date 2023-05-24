const AxiosError = require('../Errors/AxiosError');
const { logger } = require('../Logger/logger');

module.exports.errorHandler = async (err, req, res, next) => {
    console.log("In Middlware");
    const functionName = err.functionName;
    const controllerName = err.controllerName;

    logger.error(`Controller Function Name ${controllerName}`);

    const parameters = { "body ": { ...req.body }, "params": { ...req.params }, "query": { ...req.query } };
    if (err instanceof AxiosError) {
        console.log("In Axios Error");
        logger.error(`Error in URL ${req.url}`)
        logger.error(`Error in ${functionName}: ${err.message}`);
        logger.error(`Function parameters:`, parameters);
        res.status(err.statusCode).json({ error: err.message, data: err.data });
    } else {        
        console.log("In Other Errors");
        logger.error(`Error in URL ${req.url}`)
        logger.error(`Error in function ${functionName} : ${err.message}`);        
        logger.error(`Function parameters:`, parameters);        
        logger.error(`Stack trace:`, err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
