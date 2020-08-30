const mysql = require('mysql');

const db = mysql.createPool({
    host: 'database-bh.coqtinrkvbbh.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'top1305087',
    database: 'database-bh'
});

module.exports = db;