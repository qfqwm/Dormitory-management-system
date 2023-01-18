// 创建数据库连接 填入数据库信息 
const mysql = require("mysql2");
const db = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: "root",
  password: "1234567",
  database: "management",
  charset:'utf8', //应该设置编码（省略在某些情况下会有错误）
});
module.exports = db;

// // 查询信息
// app.get('/find',(req,res)=>{
//     let sql = `SELECT * FROM cart `
//     conn.query(sql,(err,results)=>{
//     //返回的查询信息为result 然后将其显示在页面上
//         res.send(results)
//     })
// })

// // 测试连接
// conn.connect(err=>{
//   console.log(err,'如果为null 就是连接成功');
// })
// 开启服务器
// app.listen(3000,()=>{
//   console.log('服务器在3000端口开启。。。。。');
// })
