const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const {authorize,authenticate} = require('../middleware/rbac')
const role = require('../auth/roles')


router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/admin',authenticate,authorize(role.admin),(req,res) =>{
    res.json({message: "Admin Content"})
})

router.get('/editor',authenticate,authorize(role.editor),(req,res) =>{
    res.json({message: "Editor Content"})
})

router.get('/user',authenticate,authorize(role.user),(req,res) =>{
    res.json({message: "User Content"})
})

module.exports = router;