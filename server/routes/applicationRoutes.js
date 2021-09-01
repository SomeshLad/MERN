const express = require("express");
const router = express.Router();
const formController = require("../controller/form");

router.post('/data', formController.postaddRecord);
router.get('/retrive:name', formController.getSearchedRecord);
//following route is pending and under developement
router.get('/update:name', formController.getUpdateRecord);

module.exports = router;