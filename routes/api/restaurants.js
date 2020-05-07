const router = require('express').Router();
const restaurantCtrl = require('../../controllers/restaurants');

router.post('/', restaurantCtrl.create);
router.get('/', restaurantCtrl.index);

module.exports = router;