const mysql = require('mysql');
const con = mysql.createConnection({
    host: "192.168.0.1",
    port: 7000,
    user: "test",
    password: '7976',
    database: "seoul",
})

exports.readAll = (req,res)=>{
    con.query('SELECT * FROM seoul.buliding', (error, row1, fields)=>{
        if(error) throw errer;
        res.send({success: 0, data: row1})
        console.log(row1);
    })
}