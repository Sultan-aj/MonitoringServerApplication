const metricsService = require('../services/metricsService');
const logger = require('../lib/logger');

exports.handleMetrics = (req, res) => {
  const { serverId, cpuLoad, ramUsage } = req.body;

  if(!serverId || !cpuLoad || !ramUsage) {
    return res.status(400).send('Bad Request: Missing required fields');
  }

  try {
    metricsService.processMetrics(serverId, cpuLoad, ramUsage);
    res.status(200).send('Metrics received');
  } catch (error) {
    logger.error(`Error processing metrics: ${error}`);
    res.status(500).send('Internal Server Error');
  }
};
