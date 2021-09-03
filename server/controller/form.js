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
  const searchName = req.query.name;
  console.log(req.query);
  Records.findByName(searchName)
    .then((records) => {
      res.json(records);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUpdateRecord = (req, res, next) => {
  console.log(req);
  const searchName = req.body.name;
  const updatePhoneNo = req.body.phoneNo;
  console.log(searchName);
  //this code is pending and under developement
  const records = new Records(searchName, updatePhoneNo);
  records
    .updatePhoneNo()
    .then((result) => {
      res.send("Phono number has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};
