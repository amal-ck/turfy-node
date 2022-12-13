var express = require('express');
var router = express.Router();
var ownerHelper=require('../helpers/owner-helpers')

/* owner controlls. */

router.get('/', function(req, res, next) {
  res.render('owner/view-turf',{owner:true,title:'owner'})
});
router.get('/add-turf',(req,res)=>{
  res.render('owner/add-turf',{owner:true,title:'add turf'})
})
router.post('/add-turf',(req,res)=>{
  
ownerHelper.addTurf(req.body).then((insertedId)=>{
  let image=req.files.Image
  image.mv('./public/turf-images/'+insertedId+'.jpg')
  res.render('owner/add-turf',{owner:true})
})


})


module.exports = router;