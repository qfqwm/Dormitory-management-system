const joi = require("joi");

// 课程查询参数的校验规则
// const category = joi.string().required();
// const page = joi.number().integer().required();
// const size = joi.number().integer().required();

//楼层管理
const dormitory = joi.number().required();
exports.adminCheck = {
  query: {
    dormitory
  },
};

//宿舍基本信息（宿舍楼）
const roomId = joi.number().required();
exports.dormitoryInfoCheck = {
  body: {
    dormitory,
    roomId,
  },
};

//提交宿舍评价
const creator = joi.string();
const score = joi.number().min(0).max(100);
const note = joi.string();
const subtime = joi.any();
exports.appraiseCheck = {
  body: {
    dormitory,
    roomId,
    creator,
    score,
    note,
    subtime,
  },
};

//学生早起记录
const userId = joi.number().required();
// const start = joi
exports.earlyCheck ={
  query: {
    // starat,
    userId,
    // end
  },
}

//学生各个方面的概率
exports.probability ={
  query: {
    // starat,
    userId,
    // end
  },
}