const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notebuddy_0.1'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connect to MySQL');
});

module.exports = db;