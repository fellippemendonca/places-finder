const { Router } = require('express');
const Bookings = require('../../controllers/Bookings');

const router = Router();

// api/bookings	//Creates a booking for a property.
router.post('/bookings', (req, res) => {
    Bookings.postBookings(req, res);
});

module.exports = router;
