const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const expressJoi = require("@escook/express-joi");
// 这里注意导出的方式对应相对应的引入方式
const { userCheck,userUpdata } = require("../utils/check");

// 用户登录
router.post("/login", expressJoi(userCheck), userController.loginController);
//用户修改密码
router.put("/updata",expressJoi(userUpdata),userController.updataController)

module.exports = router;
