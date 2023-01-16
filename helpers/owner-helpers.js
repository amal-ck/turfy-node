var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectId
module.exports={
    addTurf:(turf)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TURF_COLLECTION).insertOne(turf).then((data)=>{
                resolve(data.insertedId)
            })
            
        })
    },
    viewTurf:()=>{
        return new Promise((resolve,reject)=>{
            let turfs=db.get().collection(collection.TURF_COLLECTION).find().toArray()
            resolve(turfs)
        })
    },
    getTurfData:(turfId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TURF_COLLECTION).findOne({_id:objectId(turfId)}).then((turf)=>{
                resolve(turf)
            })
        })
    },
    updateTurf:(turfId,turfData)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TURF_COLLECTION).updateOne({_id:objectId(turfId)},{
            $set:{
                Tname:turfData.Tname,
                Mobileno:turfData.Mobileno,
                City:turfData.City,
                turfTime:turfData.turfTime
            }
            }).then((response)=>{
                resolve()
            })   
        })
    }
        
}