const axios = require('axios');
const util = require('../Utils/utils');
const {asyncWrapper}= require('../Wrappers/asyncWrapper');

module.exports.fetchData = async (req, res, next) => {
    try {
      const user = await asyncWrapper(util.getData);
      res.json(user);     
    } catch (error) {     
      error.metadata = { outerFunctionName : "fetchData" };
      next(error);
    }
}