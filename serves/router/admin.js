const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const expressJoi = require("@escook/express-joi");
// 这里注意导出的方式对应相对应的引入方式
const { adminCheck, dormitoryInfoCheck, appraiseCheck,earlyCheck } = require("../utils/admin");

// 楼层管理
router.get("/floor", expressJoi(adminCheck), adminController.FloorManagement);
//宿舍基本信息
router.post("/dormitoryInfo", expressJoi(dormitoryInfoCheck), adminController.DormitoryInfo);
//宿舍评价
router.post("/appraise", expressJoi(appraiseCheck), adminController.AppraiseCheck);
//学生起床记录
router.get("/early", expressJoi(earlyCheck), adminController.Early);

module.exports = router;