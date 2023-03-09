import { Request, Response } from 'express';
import mysql from 'mysql';
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ajdcjddl12!@#",
    database: "seoul",
})

exports.readAll = (req:Request,res:Response)=>{
    let year = req.params.year;
    con.query('SELECT * FROM seoul.building where 접수연도 = ?',[year], (error, row1, fields)=>{
        if(error) throw error;
        res.send({success: 0, data: row1})
        console.log(row1);
    })
}