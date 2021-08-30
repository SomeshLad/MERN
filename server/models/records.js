const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Record {
  constructor(name, phoneNo) {
    this.name = name;
    this.phoneNo = phoneNo;
  }

  save() {
    const db = getDb();
    let DB;
    DB = db.collection("PersonalRecords").insertOne(this);
    return DB.then((result) => {}).catch((err) => {
      console.log(err);
    });
  }

  static findByName(searchName){
    const db = getDb();
    return db
      .collection("PersonalRecords")
      .find({ name: searchName })
      .next()
      .then((record) => {
        console.log("The find By Id value=>>>");
        return record;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
module.exports = Record;
