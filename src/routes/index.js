const { Router } = require('express');
const places = require('./places');

const router = Router();

router.use('/places', places);

module.exports = router;
