const express = require('express')
const router = express.Router()
const fetchController = require('../Controllers/fetchData.controller');

router.get("/fetch", fetchController.fetchData);

module.exports = router;