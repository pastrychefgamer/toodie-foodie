const router = require('express').Router();
const restaurantCtrl = require('../../controllers/restaurants');

router.post('/', restaurantCtrl.create);

module.exports = router;