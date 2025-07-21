const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {User} = require('../models/models')

class UserController {
    
    async registration(req,res){

        try {

            const {email, password,role} = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create
        ({
            email:email,
            password:hashedPassword,
            role:role

        })

        return res.json({message: 'User registered', user:user})
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message || 'Unknown Error' });
}
        
    }

    async login(req,res){
        const {email,password} = req.body
        const user = await User.findOne({where:{email:email}});
        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(401).json({message: 'Invalid credentials'})

        }
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET , { expiresIn: '1h' });
        return res.json({ token });

    }
}

module.exports = new UserController()