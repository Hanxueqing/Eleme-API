//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    restaurant_category_ids: Array,
    _id: String,
    id: Number,
    name:String,
    __v:Number
})
//创建一个名称为indexMovies的集合
module.exports = db.model("dinnerBar", mySchema)