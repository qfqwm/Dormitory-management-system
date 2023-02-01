const db = require("../config/db");
// const bcrypt = require("bcryptjs");

// const jwt = require("jsonwebtoken");
// const { jwtSecretKey } = require("../config/jwtSecretKey");

// 登录接口逻辑
exports.loginController = (req, res) => {
  let { username, password } = req.body;
  // console.log(username, password);
  const userSelectSql = "select * from users where username=?";
  const adminSelectSql = "select * from permissions_admin";
  const studentSelectSql = "select * from permissions_student";
  db.query(userSelectSql, username, (err, results) => {
    // 错误返回日志
    if (err) {
      return res.send({ code: 2001, message: err.message });
    }
    // 账号存在与否判断
    if (results.length === 0) {
      return res.send({ code: 2002, message: "账号不存在，请先注册！" });
    }
    // console.log(results[0]);
    //判断密码是否正确
    if (password !== results[0].password) {
      return res.send({ code: 2003, message: "密码错误！" });
    // }
    } else {
      if (results[0].role == 'admin') {
        db.query(adminSelectSql, (err, rest) => {
          results[0].menuList = rest
          res.send({ code: 200, message: "登录成功", data: results[0] });
        })
      }
      if (results[0].role == 'student') {
        db.query(studentSelectSql, (err, rest) => {
          results[0].menuList = rest
          res.send({ code: 200, message: "登录成功", data: results[0] });
        })
      }
    }
  });
};

//更新信息（手机号、密码）逻辑
exports.updataController = (req, res)=>{
  let {username,phone,password,newpassword} = req.body
  // console.log(req.body);
  const updataSelectSql = "update users set password=?,phone=? where username=? and password=?";
  db.query(updataSelectSql, [newpassword,phone,username,password], (err, results) => {
    // 错误返回日志
    if (err) {
      return res.send({ code: 2001, message: err.message });
    }
    if(newpassword==password){
      return res.send({ code: 2002, message: '原密码与新密码不能一致！' });
    }else{
      if(results.changedRows=="0"){
        return res.send({ code: 2003, message: '账号或密码不一致！' });
      }else{
        return res.send({ code: 200, message: '修改成功' });
      }
    }
  })
}