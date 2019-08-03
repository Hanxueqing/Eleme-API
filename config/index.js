const db = require("mongoose")
db.connect("mongodb://39.96.84.220:27017/ele");
module.exports = db;