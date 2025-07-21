const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController')
const {authenticate,authorize} = require('../middleware/rbac')
const role = require('../auth/roles')


router.post('/create',authenticate,authorize(['create', 'read', 'update', 'delete']),brandController.create)
router.get('/removeAll',authenticate,authorize(['create', 'read', 'update', 'delete']),brandController.removeAll)
router.get('/getAll',authenticate,authorize(['create', 'read', 'update', 'delete']) ,brandController.getAll)

module.exports = router;