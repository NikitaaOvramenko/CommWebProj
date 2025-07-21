const Router = require('express');
const router = new Router();
const DrugController = require('../controllers/drugConroller')

router.post('/create',DrugController.create)
router.get('/getAll',DrugController.getAll)
router.get('/getOne',DrugController.getOne)
// router.get('/:id',)

module.exports = router;