class UserController {
    
    async registration(req,res){

    }

    async login(req,res){

    }

    async auth(req,res){
        res.json({message:"WORKING - AUTH - WORKING"});
    }
}

module.exports = new UserController()