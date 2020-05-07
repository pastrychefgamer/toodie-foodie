const router = require('express').Router();
const restaurantCtrl = require('../../controllers/restaurants');

router.get('/featured', restaurantCtrl.getFeatured);

router.use(require('../../config/auth'));

router.post('/', restaurantCtrl.create);
router.get('/', restaurantCtrl.index);

function isAuthenticated(req, res, next) {
    if(req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized!' })
}

module.exports = router;