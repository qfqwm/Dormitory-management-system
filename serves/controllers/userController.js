const db = require("../config/db");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../config/jwtSecretKey");

// 登录接口逻辑
exports.loginController = (req, res) => {
  let { username, password } = req.body;
  console.log(username, password );
  const userSelectSql = "select * from users where account=?";
  db.query(userSelectSql, username, (err, results) => {
    // 错误返回日志
    if (err) {
      return res.send({ code: 2001, message: err.message });
    }
    // 账号存在与否判断
    if (results.length === 0) {
      return res.send({ code: 2002, message: "账号不存在，请先注册！" });
    }
    console.log(results[0]);
    //判断密码是否正确
    if (password!==results[0].password) {
      return res.send({ code: 2003, message: "密码错误！" });
    }
    // // 声明需要拼接token的用户信息
    // const user = { ...results[0], password: "" };
    // // 生成token
    // const token = jwt.sign(user, jwtSecretKey, { expiresIn: "24h" });

    // 相应数据
    res.send({ code: 200, message: "登录成功", data: results[0] });
  });
};

// 用户信息查询逻辑
// exports.userInfoController = (req, res) => {
//   // 获取token
//   const token = req.headers.authorization;

//   // 解析token获取用户数据
//   const userInfo = jwt.verify(token.split("Bearer ")[1], jwtSecretKey);

//   res.send({
//     code: 0,
//     data: { name: userInfo.name, headImg: userInfo.head_img },
//   });
// };
