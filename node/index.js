const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql_create = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(sql_create)

const sql_truncate = `TRUNCATE TABLE people`
connection.query(sql_truncate)

const sql_insert = `INSERT INTO people(name) values('Wesley')`
connection.query(sql_insert)

connection.end()


app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})