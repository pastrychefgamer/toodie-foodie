const Restaurant = require('../models/restaurant');

module.exports = {
    create,
    index
};

async function create(req, res) {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.json({ restaurant });
    } catch (error) {
        res.status(401).json({ err: 'Unauthorized!' });
    }
}

async function index(req, res) {
    try {
        const restaurants = await Restaurant.find({}).sort('-createdAt').populate('addedBy');
        res.json({ restaurants });
    } catch (error) {
        res.status(401).json({err: 'Unauthorized!' });
    }
}