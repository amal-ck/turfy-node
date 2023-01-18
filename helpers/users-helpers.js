var db=require('../config/connection')
var collection = require('../config/collections')
module.exports={
    viewTurf:()=>{
        return new Promise((resolve,reject)=>{
            let turf=db.get().collection(collection.TURF_COLLECTION).find().toArray()
            resolve(turf)
        })
    }
}