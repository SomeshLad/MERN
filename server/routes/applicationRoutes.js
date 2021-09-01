const express = require("express");
const router = express.Router();
const formController = require("../controller/form");

router.post("/data", formController.postaddRecord);
router.get("/retrive", formController.getSearchedRecord);
//following route is pending and under developement
router.put("/update", formController.getUpdateRecord);

module.exports = router;
