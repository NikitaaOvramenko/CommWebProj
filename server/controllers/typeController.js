
const {Type} = require('../models/models');

class TypeController {
    
    async create(req,res){

        const {name} = req.body
        const type = await Type.create({name})
        return res.json({type: type});

    }

    async getAll(req,res){

        const all = await Type.findAll({
            where: {}
        })

        return res.json(all)

    }

    
    async removeAll(req,res){
        await Type.destroy({
            where: {}
        })

        return res.json("Everything removed from types")
    }

    async getOne(req,res){

    }
}

module.exports = new TypeController()