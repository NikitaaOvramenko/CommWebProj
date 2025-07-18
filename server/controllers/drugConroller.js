const {Drug} = require('../models/models')

class DrugController {
    
    async create(req,res){

       const {name,price,stock,typeId,brandId} = req.body
       const drug = await Drug.create
       ({name:name,
         price:price,
         stock:stock,
         typeId:typeId,
         brandId:brandId
       })   


       return res.json(drug)

    

    }

    async getAll(req,res){

    }


    async getOne(req,res){

    }

    async removeAll(req,res){

    }

}

module.exports = new DrugController()