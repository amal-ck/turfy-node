var express = require('express');
var router = express.Router();
var userHelpers=require('../helpers/users-helpers')

/* GET user page. */
router.get('/', (req, res)=>{
  userHelpers.viewTurf().then((turf)=>{
    res.render('users/home',{user:true,title:'Trfu-Home',turf})
  })
  
});

module.exports = router;
