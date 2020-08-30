var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send({title:'Hello React x Node.js'});
});

module.exports = router;