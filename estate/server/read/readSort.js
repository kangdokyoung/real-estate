const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ajdcjddl12!@#",
    database: "seoul",
})

exports.readSort = (req,res)=>{
    let year = req.params.year;
    let sort = req.params.sort;
    if (sort === 'name') {
        con.query('SELECT * FROM seoul.building where 접수연도 = ? order by 건물명 asc',[year], (error, row1, fields)=>{
            if(error) throw error;
            res.send({success: 0, data: row1})
            console.log(row1);
        })   
    }else if (sort === 'price') {
        con.query('SELECT * FROM seoul.building where 접수연도 = ? order by 물건금액 asc',[year], (error, row1, fields)=>{
            if(error) throw error;
            res.send({success: 0, data: row1})
            console.log(row1);
        })      
    }

}