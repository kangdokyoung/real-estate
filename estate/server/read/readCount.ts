import { Request, Response } from 'express';
import mysql from 'mysql';
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ajdcjddl12!@#",
    database: "seoul",
})

exports.readCount = (req:Request,res:Response)=>{
    con.query('SELECT id,건물명,COUNT(*) FROM seoul.building group by 건물명 having COUNT(건물명) > 1 order by COUNT(*) desc;', (error, row1, fields)=>{
        if(error) throw error;
        res.send({success: 0, data: row1})
        console.log(row1);
    })
}