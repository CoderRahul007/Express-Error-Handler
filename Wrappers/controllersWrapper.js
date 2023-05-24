module.exports.controllerWrapper = (controllerName , controllerFn) => {
    return async (req, res, next) => {
        try {               
            await controllerFn(req, res, next);
        } catch (error) {   
            error.controllerName = controllerName ;
            next(error);
        }
    };
}

