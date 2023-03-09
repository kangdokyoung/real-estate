import { Request, Response } from 'express';
import mysql from 'mysql';
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ajdcjddl12!@#",
    database: "seoul",
})

exports.readChart = (req:Request,res:Response)=>{
    let year = req.params.year;
    let sort = req.params.sort;
    if (sort === 'count') {
        con.query('SELECT 자치구명,COUNT(*) FROM seoul.building where 접수연도 = ? group by 자치구명 having COUNT(자치구명) > 1 order by COUNT(*) desc;',[year], (error, row1, fields)=>{
            if(error) throw error;
            res.send({success: 0, data: row1})
            console.log(row1);
        })   
    }else if (sort === 'price') {
        con.query('SELECT 자치구명,ROUND(AVG(물건금액)) FROM seoul.building where 접수연도 = ? group by 자치구명 order by ROUND(AVG(물건금액)) desc;',[year], (error, row1, fields)=>{
            if(error) throw error;
            res.send({success: 0, data: row1})
            console.log(row1);
        })      
    }
}