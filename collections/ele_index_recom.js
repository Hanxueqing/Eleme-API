//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    activity: Object,
    attributes:Array,
    attrs: Array,
    brand: Object,
    category_id: Number,
    description:String,
    image_mark: Object,
    image_path: String,
    is_essential:Boolean,
    is_featured: Number,
    item_id: String,
    min_purchase: Number,
    month_sales: Number,
    name: String,
    photos: Array,
    rating: Number,
    rating_count: Number,
    restaurant_id: String,
    satisfy_count: Number,
    satisfy_rate: Number,
    scheme: String,
    specfoods: Array,
    specifications: Array,
    tips: String,
    type: Number,
    virtual_food_id: Number,
})
//创建一个名称为indexMovies的集合
module.exports = db.model("recom", mySchema)