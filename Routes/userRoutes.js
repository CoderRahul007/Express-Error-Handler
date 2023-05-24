const express = require('express')
const router = express.Router()
const { wrappedFetchData } = require('../Controllers/fetchData.controller');

router.get("/fetch", wrappedFetchData);

module.exports = router;