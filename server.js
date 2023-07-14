require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./lib/logger');
const metricsController = require('./controllers/metricsController');

const app = express();
app.use(bodyParser.json());

app.post('/api/metrics', metricsController.handleMetrics);

const port = process.env.PORT || 5000;
app.listen(port, () => logger.info(`Server listening on port ${port}`));
