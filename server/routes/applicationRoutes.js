const express = require("express");
const router = express.Router();
const formController = require("../controller/form");

router.post('/', formController.postaddRecord);
router.get('/retrive:name', formController.getAllData);

module.exports = router;