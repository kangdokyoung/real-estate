const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ajdcjddl12!@#",
    database: "seoul",
})
connection.connect();

const helmet = require('helmet');
app.use(helmet());

const cors = require('cors');
app.use(cors({
    origin: true, credentials: true
}))

app.use(express.json());
app.listen(2005, ()=>{console.log(`server run in 2005`)});

//-------------------------------------------------------------

const {readAll} = require('./read/readAll');

//-------------------------------------------------------------
app.post('/readAll', (req, res)=>{
    readAll(req,res)
})