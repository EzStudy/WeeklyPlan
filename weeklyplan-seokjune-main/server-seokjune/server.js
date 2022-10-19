//server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res)=>{
    res.send('hello node!')
;})

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: 'admin',
    database: 'db'
});
connection.connect();

app.get('/api/db', (req, res) => {
    const sql = 'select * from table1';
    connection.query(sql, (err, rows) => {
        if(err){
            res.send('Opps Error\n');
        } else {
            res.send(rows);
        }
    })
})

app.get('/api/delete', (req,res) => {
    const sql = 'delete from table1';
    connection.query(sql, (err, rows) => {
        if(err){
            res.send('삭제가 실패했습니다. \n');
        } else {
            res.send('모든 데이터가 삭제되었습니다.');
        }
    })
})

//API 라우팅
app.post('/api/insert', (req,res)=>{
    const sql = `insert into table1 (name) value ('${req.body.post}')`;
    connection.query(sql, (err, rows) => {
        if(err){
            res.send('삽입에 실패했습니다.');
        } else {
            res.send('삽입이 완료 되었습니다.');
        }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));