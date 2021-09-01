const Records = require("../models/records");

exports.postaddRecord = (req, res, next) => {
  console.log(req);
  const name = req.body.name;
  console.log(name);
  const phoneNumber = req.body.phoneNo;
  console.log(phoneNumber);
  records = new Records(name, phoneNumber);
  records
    .save()
    .then((result) => {
      console.log("record has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("Insertion Completed");
};

exports.getSearchedRecord = (req, res, next) => {
  const searchName = req.params.name;
  Records.findByName(searchName)
    .then((records) => {
      res.json(records);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUpdateRecord = (req, res, next) => {
  const searchName = req.params.name;
  const updatePhoneNo = req.params.phoneNo;
  //this code is pending and under developement
  const records = new Records(searchName, updatePhoneNo);
  records
    .updatePhonoNo()
    .then((result) => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
