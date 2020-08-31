const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');


const multer = require('multer');
const upload = multer({ dest: './upload' });

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();


app.get('/api/customers', (req, res) => {
    connection.query(
        'SELECT * FROM CUSTOMER',
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

//app.use(express.static('./upload'));

app.post('/api/customers', upload.single(), (req, res) => {   //, upload.single('image')
    let sql = 'INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?,?,?)';
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let city = req.body.city;
    let district = req.body.district;
    let address = req.body.address;
    console.log(email);
    console.log(password);
    console.log(name);
    console.log(birthday);
    console.log(city);
    console.log(district);
    console.log(address);
    let params = [name, birthday, city, district, address, email, password];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
            console.log(rows);
        }
    );
});
app.listen(port, () => console.log(`Listening on port ${port}`));