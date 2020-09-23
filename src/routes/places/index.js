const { Router } = require('express');
const Places = require('../../controllers/Places');

const router = Router();

router.get('/latitude/:latitude/longitude/:longitude', (req, res) => {
    Places.getPlaces(req, res);
});

module.exports = router;
