const Records = require("../models/records");

exports.postaddRecord = (req, res, next) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  records = new Records(name, phoneNumber);
  records
    .save()
    .then((result) => {
      console.log("record has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSearchedRecord = (req, res, next) => {
  const searchName = req.params.name;
  Records.findByName(searchName)
    .then( records => {
        res.json(records);
    }
    )
    .catch((err) => {
      console.log(err);
    });
};
