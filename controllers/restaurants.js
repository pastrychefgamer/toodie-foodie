const Restaurant = require('../models/restaurant');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.json({ restaurant });
    } catch (error) {
        res.status(401).json({ err: 'Unauthorized!' });
    }
}