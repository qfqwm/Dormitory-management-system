const db = require("../config/db");

//查询楼层信息逻辑
exports.FloorManagement = (req, res) => {
    let { dormitory } = req.query
    // console.log(dormitory);
    const floors = "select * from floors where buildingId=?"
    // const rooms = "select floorId,number from rooms where buildingId=? and floorId=?";
    const rooms = "select floorId,group_concat(distinct number) as number from rooms where buildingId=? and floorId=? group by floorId; "
    const val = []
    // let list = []
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
    console.log(req.body);
    let { dormitory, roomId } = req.body
    console.log(dormitory, roomId);
    const dormitorys = "select * from users where buildingId=? and roomId=?"
    db.query(dormitorys, [dormitory, roomId], (err, results) => {
        // 错误返回日志
        if (err) {
            return res.send({ code: 2001, message: err.message });
        }
        res.send({ code: 200, message: results });
    })
}