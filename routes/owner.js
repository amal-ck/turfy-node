var express = require('express');
var router = express.Router();

/* owner controlls. */

router.get('/', function(req, res, next) {
  res.render('owner/view-turf',{owner:true,title:'owner'})
});
router.get('/add-turf',(req,res)=>{
  res.render('owner/add-turf',{owner:true,title:'add turf'})
})


module.exports = router;