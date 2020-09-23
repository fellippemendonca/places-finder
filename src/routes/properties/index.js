const { Router } = require('express');
const Properties = require('../../controllers/Properties');

const router = Router();

// api/properties?at=LAT,LONG	//Returns the property around Lat/Lon
router.get('', (req, res) => {
    Properties.getProperties(req, res);
});

// api/properties/PROPERTY_ID/bookings	//Returns the bookings for a property
router.get('/:PROPERTY_ID/bookings', (req, res) => {
    Properties.getProperties(req, res);
});

module.exports = router;
