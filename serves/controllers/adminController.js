const db = require("../config/db");

//概览
exports.Overview = (req,res)=>{
    let { dormitory } = req.query
    const over = "select count(number) as number,sum(peopleNum) as peopleNum,max(floorId) as floorId,buildingId from rooms where buildingId=?"
    const info = "select name,userId,building,floorId,roomId,data,time from getup_records where building=?"
    let data=[]
    db.query(over, dormitory, (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        // res.send({ code: 200, message: results[0] });
        data.push(results[0])
        db.query(info, dormitory, (err, result) => {
            // 错误返回日志
            if (err) {
                return res.send({ code: 2001, message: err.message });
            }
            // console.log(result);
            data.push(result)
            res.send({ code: 200, message: data });    
        })    
    })
}

//查询楼层信息逻辑
exports.FloorManagement = (req, res) => {
    let { dormitory } = req.query
    const floors = "select * from floors where buildingId=? order by number"
    const rooms = "select floorId,group_concat(distinct number) as number from rooms where buildingId=? and floorId=? order by floorId"
    const val = []
    db.query(floors, dormitory, (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        if (results.length < 1) {
            return res.send({ code: 2002, message: '信息错误！' });
        } else {
            results.forEach(function (num) {
                let { number, buildingId } = num
                db.query(rooms, [buildingId, number], (err, result) => {
                    if (err) {
                        return res.send({ code: 2001, message: err.message });
                    }
                    // console.log(result);
                    result.forEach((item, index, arr) => {
                        item.number = item.number.toString();
                        val.push(item)
                    })
                })
            });
            setTimeout(() => {
                res.send({ code: 200, message: val });
            }, 100)
        }
    })
}

//检索宿舍基本信息
exports.DormitoryInfo = (req, res) => {
    // console.log(req.body);
    let { dormitory, roomId } = req.body
    // console.log(dormitory, roomId);
    const dormitorys = "select username,name,phone,password,role,roomId,checkTime,buildingId,studentId from users where buildingId=? and roomId=?"
    const getappraise = "select creator,score,note,subtime from evaluate where buildingId=? and roomId=? order by subtime desc limit 6"
    const data = []
    db.query(dormitorys, [dormitory, roomId], (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        data.push(results)
        db.query(getappraise, [dormitory, roomId], (err, result) => {
            // 错误返回日志
            if (err) {
                return res.send({ code: 2001, message: err.message });
            }
            data.push(result)
            console.log(data);
            res.send({ code: 200, message: data });
        })     
    })
}

//提交宿舍评价
exports.AppraiseCheck = (req, res) => {
    // console.log(req.body);
    let { dormitory, roomId, creator, score, note, subtime } = req.body
    // console.log(dormitory, roomId, creator, score, note, subtime);
    const appraiseChecks = "insert into evaluate (buildingId,roomId,creator,score,note,subtime) values (?,?,?,?,?,?)"
    db.query(appraiseChecks, [dormitory, roomId, creator, score, note, subtime], (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        if(results.affectedRows!=0){
            res.send({ code: 200, message: '添加成功！' });
        }
    })
}

//学生早起记录
exports.Early = (req, res) => {
    let { userId } = req.query
    // console.log(userId);
    const earlyChecks = "select name,userId,building,floorId,roomId,data,time from getup_records where userId=?"
    db.query(earlyChecks, userId, (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        res.send({ code: 200, message: results });
    })
}

//学生晚归记录
exports.Late = (req, res) => {
    let { userId } = req.query
    // console.log(userId);
    const earlyChecks = "select name,userId,building,floorId,roomId,data,time from clean_records where userId=?"
    db.query(earlyChecks, userId, (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        res.send({ code: 200, message: results });
    })
}

//学生打扫记录
exports.Sweep = (req, res) => {
    let { userId } = req.query
    // console.log(userId);
    const earlyChecks = "select name,userId,building,floorId,roomId,data,time from back_records where userId=?"
    db.query(earlyChecks, userId, (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        res.send({ code: 200, message: results });
    })
}

//学生各个方面的概率
exports.Probability = (req, res) => {
    let { userId } = req.query
    // console.log(userId);
    const earlyChecks = "select name,userId,building,floorId,roomId,data,time from back_records where userId=?"
    db.query(earlyChecks, userId, (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        res.send({ code: 200, message: results });
    })
}