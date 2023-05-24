
const AxiosError = require('../Errors/AxiosError');


module.exports.asyncWrapper = async (asyncFunction, params = null) => {
    try {
        var fnName = asyncFunction.name;
        const data = await asyncFunction(params)
        return data;
    }
    catch (error) {
        console.log(error);
            console.log("In Async Errors");
            if (error.isAxiosError) {
                console.log("In Async Axios Errors");            
                let data = error?.response?.data ? error?.response?.data : "Internal Server Error";
                let status = error?.response?.status ? error?.response?.status : 500;
                throw new AxiosError(fnName, error.message, status, data);
            } else {
                console.log("In Async Other Errors");
                // Forward other errors to the error handling middleware
                error.functionName = fnName;
                throw error;
            }
    }
}



