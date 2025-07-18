const {Brand} = require('../models/models')

class BrandController {
    
    async create(req,res){

        const {name} = req.body
        const type = await Brand.create({name})
        return res.json({type: type});

    }

    async getAll(req,res){

        const all = await Brand.findAll({
            where: {}
        })

        return res.json(all)

    }

    
    async removeAll(req,res){
        await Brand.destroy({
            where: {}
        })

        return res.json("Everything removed from types")
    }

    async getOne(req,res){

    }
}

module.exports = new BrandController()