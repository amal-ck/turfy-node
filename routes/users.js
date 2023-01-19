var express = require('express');
var router = express.Router();
var userHelpers=require('../helpers/users-helpers')

/* GET user page. */
router.get('/', (req, res)=>{
  userHelpers.viewTurf().then((turf)=>{
    res.render('users/home',{user:true,title:'Turfy Home',turf})
  })  
});
router.get('/book-turf/:id',(req,res)=>{
  res.render('users/view-turf',{user:true,title:'Book turf'})
})

module.exports = router;
