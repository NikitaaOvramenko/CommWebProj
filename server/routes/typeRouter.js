const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const {authenticate,authorize} = require('../middleware/rbac')
const roles = require('../auth/roles')

router.post('/create',authenticate,authorize(roles.admin),typeController.create)
router.get('/removeAll',authenticate,authorize(roles.admin),typeController.removeAll)
router.get('/getAll',authenticate,authorize(roles.admin),typeController.getAll)


module.exports = router;