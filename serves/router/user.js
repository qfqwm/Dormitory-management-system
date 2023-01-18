// const express = require("express");
// const router = express.Router();
// // const db = require("../config/db");
// // const userController = require("../controllers/userController");
// // const expressJoi = require("@escook/express-joi");
// // // 这里注意导出的方式对应相对应的引入方式
// // const { userCheck } = require("../utils/check");
// // // 用户注册
// // router.post(
// //   "/register",
// //   expressJoi(userCheck),
// //   userController.registerController
// // );

// // // 用户登录
// // router.post("/login", expressJoi(userCheck), userController.loginController);

// // // 用户信息查询接口
// // router.get('/userInfo', userController.userInfoController);

// // 查询信息
// // router.get('/find',(req,res)=>{
// //     let sql = `SELECT * FROM cart `
// //     db.query(sql,(err,results)=>{
// //     //返回的查询信息为result 然后将其显示在页面上
// //         res.send(results)
// //     })
// // })

// // // 测试连接
// // conn.connect(err=>{
// //   console.log(err,'如果为null 就是连接成功');
// // })

// module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const expressJoi = require("@escook/express-joi");
// 这里注意导出的方式对应相对应的引入方式
const { userCheck } = require("../utils/check");
// // 用户注册
// router.post(
//   "/register",
//   expressJoi(userCheck),
//   userController.registerController
// );

// 用户登录
router.post("/login", expressJoi(userCheck), userController.loginController);

// 用户信息查询接口
// router.get('/userInfo', userController.userInfoController);
module.exports = router;
