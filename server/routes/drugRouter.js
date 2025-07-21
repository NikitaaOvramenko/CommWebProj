const Router = require('express');
const router = new Router();
const DrugController = require('../controllers/drugConroller')
const {authenticate,authorize} = require('../middleware/rbac')
const roles = require('../auth/roles')

router.post('/create',authenticate,authorize(roles.admin),DrugController.create)
router.get('/getAll',authenticate,authorize(roles.user),DrugController.getAll)
router.get('/getOne',authenticate,authorize(roles.user),DrugController.getOne)
// router.get('/:id',)

module.exports = router;