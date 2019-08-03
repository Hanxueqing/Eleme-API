//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    _id: String,
    id: Number,
    img: String,
    name:String,
    title: String,
    confirm: String,
    time: String,
    price: String,
    __v:Number

    
})
//创建一个名称为indexMovies的集合
module.exports = db.model("order", mySchema)