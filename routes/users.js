var express = require('express');
var router = express.Router();
var userHelpers=require('../helpers/users-helpers')

/* GET user page. */
router.get('/', function(req, res, next) {
  res.render('users/home', { title: 'Express',user:true });
});

module.exports = router;
