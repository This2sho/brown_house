const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const db = require('./config/db');

app.use(cors());
app.use('/api', api);

const port = 3001;

app.get('/api/test', (req, res) => {
    db.query("select * from test", (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.listen(port, ()=>console.log(`listen ${port}`));