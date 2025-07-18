
//Main  Router
const Router = require('express');
const router = new Router();

//External Sub-Routers
const brandRouter = require('./brandRouter')
const drugRouter = require('./drugRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

//Mount routs 
router.use('/user',userRouter);
router.use('/brand',brandRouter);
router.use('/type',typeRouter);
router.use('/drug',drugRouter);

module.exports = router;