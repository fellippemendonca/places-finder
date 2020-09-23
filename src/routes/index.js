const { Router } = require('express');
const properties = require('./properties');
const bookings = require('./bookings');

const router = Router();

router.use('/properties', properties);
router.use('/bookings', bookings);

module.exports = router;
