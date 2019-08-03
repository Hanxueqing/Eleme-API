//引入collection集合
const ele_dinner_dinnerBar = require("./collections/ele_dinner_dinnerBar");
const ele_dinner_dinnerChoose = require("./collections/ele_dinner_dinnerChoose");
const ele_dinner_dinnerResList = require("./collections/ele_dinner_dinnerResList");
const ele_index_banners = require("./collections/ele_index_banners");
const ele_index_cities = require("./collections/ele_index_cities");
const ele_index_home = require("./collections/ele_index_home");
const ele_index_recom = require("./collections/ele_index_recom");
const ele_order_order = require("./collections/ele_order_order");

//1.引入相关数据
let dinnerBar = require("./data/ele_dinner_dinnerBar");
let dinnerChoose = require("./data/ele_dinner_dinnerChoose");
let dinnerResList = require("./data/ele_dinner_dinnerResList");
let banners = require("./data/ele_index_banners");
let cities = require("./data/ele_index_cities");
let home = require("./data/ele_index_home");
let recom = require("./data/ele_index_recom");
let order = require("./data/ele_order_order");

//2.插入多条语句
/* ele_dinner_dinnerBar.insertMany(dinnerBar,err=>{
    if(!err){
        console.log("ele_dinner_dinnerBar插入成功！")
    }else{
        console.log("ele_dinner_dinnerBar插入失败！")
    }
})
ele_dinner_dinnerChoose.insertMany(dinnerChoose, err => {
    if (!err) {
        console.log("ele_dinner_dinnerChoose插入成功！")
    }
})
ele_dinner_dinnerResList.insertMany(dinnerResList, err => {
    if (!err) {
        console.log("ele_dinner_dinnerResList插入成功！")
    }
})
ele_index_banners.insertMany(banners, err => {
    if (!err) {
        console.log("ele_index_banners插入成功！")
    }
})
ele_index_cities.insertMany(cities, err => {
    if (!err) {
        console.log("ele_index_cities插入成功！")
    }
})

ele_index_home.insertMany(home, err => {
    if (!err) {
        console.log("ele_index_home插入成功！")
    }
})
ele_index_recom.insertMany(recom, err => {
    if (!err) {
        console.log("ele_index_recom插入成功！")
    }
})
ele_order_order.insertMany(order, err => {
    if (!err) {
        console.log("ele_order_order插入成功！")
    }
}) */

var express = require('express')
var app = express();
//设置监听8088端口
app.listen(8088, "0.0.0.0")
//创建路由
var router = express.Router()
app.use("/ele", router)


//localhost:8088/ele/index
router.get("/index/banners", (req, res, next) => {
    indexModel = ele_index_banners.find({})
    indexModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})

router.get("/index/home", (req, res, next) => {
    indexModel = ele_index_home.find({})
    indexModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
router.get("/index/recom", (req, res, next) => {
    indexModel = ele_index_recom.find({})
    indexModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
router.get("/order/order", (req, res, next) => {
    orderModel = ele_order_order.find({})
    orderModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})


router.get("/dinner/bar", (req, res, next) => {
    // 接受前端传来的参数
    let page = parseInt(req.param('page')) || 1
    let pageSize = parseInt(req.param('limit')) || 10
    let sort = req.param("sort")
    let skip = (page - 1) * pageSize//1*10
    let params = {};
    let hotsModel = ele_dinner_dinnerBar.find(params).skip(skip).limit(pageSize)
    let len = 0;
    ele_dinner_dinnerBar.find(params, (err, result) => {
        len = result.length;
        hotsModel.sort({ 'favorite_count': sort })
        hotsModel.exec((err, doc) => {
            if (err) {
                res.json({
                    status: '-1',
                    msg: err.message
                })
            } else {
                res.json({
                    status: '1',
                    data: {
                        total: len,
                        current_total: doc.length,
                        object_list: doc
                    }
                })
            }
        })
    })
})

router.get("/dinner/reslist", (req, res, next) => {
    // 接受前端传来的参数
    let page = parseInt(req.param('page')) || 1
    let pageSize = parseInt(req.param('limit')) || 10
    let sort = req.param("sort")
    let skip = (page - 1) * pageSize//1*10
    let params = {};
    let hotsModel = ele_dinner_dinnerResList.find(params).skip(skip).limit(pageSize)
    let len = 0;
    ele_dinner_dinnerResList.find(params, (err, result) => {
        len = result.length;
        hotsModel.sort({ 'favorite_count': sort })
        hotsModel.exec((err, doc) => {
            if (err) {
                res.json({
                    status: '-1',
                    msg: err.message
                })
            } else {
                res.json({
                    status: '1',
                    data: {
                        total: len,
                        current_total: doc.length,
                        object_list: doc
                    }
                })
            }
        })
    })
})
router.get("/dinner/choose", (req, res, next) => {
    // 接受前端传来的参数
    let page = parseInt(req.param('page')) || 1
    let pageSize = parseInt(req.param('limit')) || 10
    let sort = req.param("sort")
    let skip = (page - 1) * pageSize//1*10
    let params = {};
    let hotsModel = ele_dinner_dinnerChoose.find(params).skip(skip).limit(pageSize)
    let len = 0;
    ele_dinner_dinnerChoose.find(params, (err, result) => {
        len = result.length;
        hotsModel.sort({ 'favorite_count': sort })
        hotsModel.exec((err, doc) => {
            if (err) {
                res.json({
                    status: '-1',
                    msg: err.message
                })
            } else {
                res.json({
                    status: '1',
                    data: {
                        total: len,
                        current_total: doc.length,
                        object_list: doc
                    }
                })
            }
        })
    })
})

router.get("/index/cities", (req, res, next) => {
    // 接受前端传来的参数
    let page = parseInt(req.param('page')) || 1
    let pageSize = parseInt(req.param('limit')) || 10
    let sort = req.param("sort")
    let skip = (page - 1) * pageSize//1*10
    let params = {};
    let hotsModel = ele_index_cities.find(params).skip(skip).limit(pageSize)
    let len = 0;
    ele_index_cities.find(params, (err, result) => {
        len = result.length;
        hotsModel.sort({ 'favorite_count': sort })
        hotsModel.exec((err, doc) => {
            if (err) {
                res.json({
                    status: '-1',
                    msg: err.message
                })
            } else {
                res.json({
                    status: '1',
                    data: {
                        total: len,
                        current_total: doc.length,
                        object_list: doc
                    }
                })
            }
        })
    })
})

// 查询/my/movies/list?page=2&limit=4&sort=1
//page页数  limit条数 sort排序
/* router.get("/dinner/bar", (req, res, next) => {
    // 接受前端传来的参数
    let page = parseInt(req.param('page')) || 1 //页数 默认为1
    let pageSize = parseInt(req.param('limit')) || 10 //每页显示的条数 默认为10
    //按照sort来排序 
    let sort = req.param("sort")
    let skip = (page - 1) * pageSize//1*10
    let params = {};

    let hotsModel = ele_dinner_dinnerBar.find(params).skip(skip).limit(pageSize)
    let len = 0;
    ele_dinner_dinnerBar.find(params, (err, result) => {
        len = result.length;
        //可以按照sc评分来排序 用户传入sort=1正序排列
        hotsModel.sort({ 'sc': sort })
        hotsModel.exec((err, doc) => {
            if (err) {
                res.json({
                    status: '-1',
                    msg: err.message
                })
            } else {
                res.json({
                    status: '1',
                    data: {
                        total: len,
                        current_total: doc.length,
                        object_list: doc
                    }
                })
            }
        })
    })
}) */





//更新语句
// dt.updateOne({ sender_id: 16617347 }, { $set: { msg:"哈哈哈"}},err=>{
//     if(!err){
//         console.log("更新成功！")
//     }
// })

// dt.updateMany({ name: "王五" }, { $set: { age: 30 } }, err => {
//     if (!err) {
//         console.log("更新成功！")
//     }
// })


//删除语句
// dt.deleteMany({name:"Lisi"},err=>{
//     if(!err){
//         console.log("删除成功！")
//     }
// })


//查找用户
// dt.find({ name: "王五" }, { name: 1, age: 1, _id: 0 }, (err, result) => {
//     if (!err) {
//         var str = ""
//         result.forEach(item => {
//             str += item.name + ":" + item.age + "\n"
//         })
//         console.log("用户信息为：\n" + str)
//     }
// });