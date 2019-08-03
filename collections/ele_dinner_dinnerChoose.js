//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    activity_type:Array,
    price_ranges: Array,
    supports: Array,
    inside_sort_filter: Array,
    outside_filters: Array,
    outside_sort_filter: Array,
    _id: String,
    delivery_mode:Object,
    super_vip:Object,
    __v:Number

    
})
//创建一个名称为indexMovies的集合
module.exports = db.model("dinnerChoose", mySchema)