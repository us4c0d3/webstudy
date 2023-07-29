const express = require('express')
const router = require('./asdf.js');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdf',
    database: 'webstudy'
});
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/todolist', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})