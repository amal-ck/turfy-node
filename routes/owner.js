var express = require('express');
var router = express.Router();
var ownerHelper=require('../helpers/owner-helpers')

/* owner controlls. */

router.get('/', function(req, res, next) {
  ownerHelper.viewTurf().then((turfs)=>{
    res.render('owner/view-turf',{owner:true,title:'owner',turfs})
  })
  
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
router.get('/booked-turfs',(req,res)=>{
  res.render('owner/booked-turfs',{owner:true})
})
router.get('/edit-turf/:id',async(req,res)=>{
  let turf=await ownerHelper.getTurfData(req.params.id)
  res.render('owner/edit-turf',{owner:true,title:'Edit Turf',turf})
})
router.post('/edit-turf/:id',(req,res)=>{
  id=req.params.id
  ownerHelper.updateTurf(req.params.id,req.body).then(()=>{
    res.redirect('/owner')
    if(req?.files?.Image){
      let image=req.files.Image
      image.mv('./public/turf-images/'+id+'.jpg')
    }
  })
  
})
router.get('/delete-turf/:id',(req,res)=>{
  turfId=req.params.id
  ownerHelper.deleteTurf(turfId).then((response)=>{
    res.redirect('/owner')
  })
})

module.exports = router;