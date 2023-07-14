const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');

router.post('/metrics', metricsController.postMetrics);
router.get('/metrics/:serverId', metricsController.getMetrics);

module.exports = router;
