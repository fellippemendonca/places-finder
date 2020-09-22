const { Router } = require('express');
const Places = require('../../controllers/Places');

const router = Router();

router.get('/latitude/:lat/longitude/:lon', (req, res) => {
    Places.getPlaces(req, res);
});

module.exports = router;
