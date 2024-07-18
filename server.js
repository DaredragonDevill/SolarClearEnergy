const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'solar_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    
    db.query(query, [name, email, message], (err, result) => {
        if (err) throw err;
        res.send('Contact information saved');
    });
});

app.listen(3306, () => {
    console.log('localhost:3306');
});
