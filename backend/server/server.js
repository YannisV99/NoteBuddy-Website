const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST'],
}));
app.use(bodyParser.json());

app.post('./login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM user WHERE username = ?';
    db.query(sql, [username], (err, results) => {
        if (err) return res.status(500).send('Database error');
        if (results.length === 0) return res.status(401).send('User not found');

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).send('Bcrypt error');
            if (!isMatch) return res.status(401).send('Invalid password');

            res.send({ message: 'Login successful', userId: user.userid });
        });
    });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});