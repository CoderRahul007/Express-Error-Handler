const axios = require('axios');
const util = require('../Utils/utils');
const { asyncWrapper } = require('../Wrappers/asyncWrapper');
const { controllerWrapper } = require('../Wrappers/controllersWrapper');

module.exports.wrappedFetchData = controllerWrapper( "wrappedFetchData" , async (req, res, next) => {
  const user = await asyncWrapper(util.getData);
  res.json(user);
})