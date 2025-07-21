const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const {authorize,authenticate} = require('../middleware/rbac')
const role = require('../auth/roles')


router.post('/registration',userController.registration)
router.post('/login',userController.login)
// router.get('/admin',authenticate,authorize(['create', 'read', 'update', 'delete']),(req,res) =>{
//     res.json({message: "Admin Content"})
// })

// router.get('/editor',authenticate,authorize(['create', 'read', 'update']),(req,res) =>{
//     res.json({message: "Editor Content"})
// })

// router.get('/user',authenticate,authorize(['read']),(req,res) =>{
//     res.json({message: "User Content"})
// })

module.exports = router;