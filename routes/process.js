var express = require('express');
var router = express.Router();

/* GET Process page. */
router.get('/', function(req, res, next) {
  res.render('process', { 
      title: 'Process' 
    });
});

module.exports = router;