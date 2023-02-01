const express = require("express");
const app = express();
// 解析post请求的body数据
app.use(express.urlencoded({extends:false})) //post参数-sndnd=2313&asd=333
app.use(express.json()) //post参数-{name:"",age:100}
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// 配置跨域请求
const cors = require("cors");
app.use(cors());

// 解析token校验是否正确、哪些接口需要token校验
// const expressJwt = require("express-jwt");
// const { jwtSecretKey } = require("./config/jwtSecretKey");
// app.use(
//   expressJwt({ secret: jwtSecretKey, algorithms: ["HS256"] }).unless({
//     path: ["/api/v1/user/register", "/api/v1/user/login"],
//   })
// );

// 用户相关接口
// const userRouter = require("./router/user");
// app.use("/api/v1/user", userRouter);

// 课程相关接口
// const courseRouter = require("./router/course");
// app.use("/api/v1/course", courseRouter);
// 错误处理中间件
// const joi = require("joi");
// app.use((err, req, res, next) => {
//   // joi表单的用户信息校验失败
//   if (err instanceof joi.ValidationError) {
//     return res.send({
//       code: 1,
//       message: err.message,
//     });
//   }

//   if (err.name === "UnauthorizedError") {
//     return res.send({
//       code: 1,
//       message: "身份认证失败",
//     });
//   }
//   // 其他错误
//   res.send({ code: 1, message: err.message });
// });

//应用级别（用户登录）
const userRouter = require("./router/user");
app.use("/user", userRouter);

//管理员相关操作
const adminRouter = require("./router/admin");
app.use("/admin", adminRouter);

app.listen(80, () => {
  console.log("服务器启动!");
});
