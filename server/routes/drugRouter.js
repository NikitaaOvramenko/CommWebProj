const Router = require('express');
const router = new Router();
const DrugController = require('../controllers/drugConroller')

router.post('/create',DrugController.create)
router.get('/',)
router.get('/:id',)

module.exports = router;