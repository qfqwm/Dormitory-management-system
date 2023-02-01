const joi = require("joi");

// 课程查询参数的校验规则
// const category = joi.string().required();
// const page = joi.number().integer().required();
// const size = joi.number().integer().required();

//楼层管理
const dormitory = joi.number();
exports.adminCheck = {
  query: {
    dormitory
  },
};

//宿舍基本信息（宿舍楼）
const roomId = joi.number();
exports.dormitoryInfoCheck = {
  body: {
    dormitory,
    roomId,
  },
};


// 课程修改参数的校验规则
// const title = joi.string();
// const price = joi.number();
// const id = joi.number().integer().required();
// exports.updateCourseCheck = {
//   query: {
//     title,
//     price,
//     id,
//   },
// };

// 课程删除参数校验规则
// exports.deleteCourseCheck = {
//   query: {
//     id,
//   },
// };
