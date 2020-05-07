const Restaurant = require('../models/restaurant');

module.exports = {
    create,
    index,
    getFeatured
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

async function getFeatured(res, res) {
    try {
        const featured = await Restaurant.find({})
        .sort('-createdAt').limit(3).populate('addedBy');
        res.json({ featured });
    } catch (error) {
        res.status(400).json({err: 'Bad Request!' });
    }
}