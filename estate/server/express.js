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
const { readCount } = require('./read/readCount');
const { readSort } = require('./read/readSort');
const { readChart } = require('./read/readChart');

//-------------------------------------------------------------
app.get('/readAll/:year', (req, res)=>{
    readAll(req,res)
})

app.get('/readCount', (req, res)=>{
    readCount(req,res)
})

app.get('/readSort/:year/:sort', (req, res)=>{
    readSort(req,res)
})

app.get('/readChart/:year/:sort', (req, res)=>{
    readChart(req,res)
})