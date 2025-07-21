const uuid = require('uuid');
const path = require('path');
const fs = require('fs')
const apiError = require('../error/ApiError')

const {Drug} = require('../models/models')

class DrugController {
    
    async create(req,res){


      try {

        const {name,price,stock,typeId,brandId} = req.body
       const {img} = req.files

       let fileName = uuid.v4() + ".jpg"
       
       const staticPath = path.resolve(__dirname,'..','static')

       if(!fs.existsSync(staticPath)){
          fs.mkdirSync(staticPath);
       }
       img.mv(path.resolve(__dirname,'..','static',fileName));
       // move image from /controllers to (..) /static

       const drug = await Drug.create
       ({name:name,
         price:price,
         stock:stock,
         typeId:typeId,
         brandId:brandId,
         img: fileName
       })   

       
        
      } catch (error) {
        console.log(apiError.badRequest(e.message))
      }
      
      return res.json(drug)
    }





    async getAll(req,res){

      const {typeId,brandId} = req.query

      let devices;

      if (typeId && brandId){
        devices = await Drug.findAll({where: {typeId:typeId,brandId:brandId}})
      }

      else if (!typeId && brandId){
        devices = await Drug.findAll({where: {brandId:brandId}})
      }

      else if (typeId && !brandId){
        devices = await Drug.findAll({where: {typeId:typeId}})
      }

      else if (!typeId && !brandId){
        devices = await Drug.findAll({where:{}})
      }

      return res.json(devices);

    }


    async getOne(req,res){

      const {name} = req.query

      const theOne = await Drug.findOne({where:{
        name:name
      }})


      if (!theOne){
        return res.json("this drug is not found !")
      }

      return res.json(theOne)
    }

    async removeAll(req,res){

      const deleteAll = await Drug.destroy({where:{}})

      return res.json(deleteAll);
    }

}

module.exports = new DrugController()