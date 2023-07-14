const axios = require('axios');
const logger = require('../lib/logger');

let isLeader = process.env.IS_LEADER === 'true';

exports.processMetrics = (serverId, cpuLoad, ramUsage) => {
  if (isLeader) {
    logger.info(`Metrics received from ${serverId}: cpuLoad = ${cpuLoad}, ramUsage = ${ramUsage}`);
  } else {
    const myUrl = `http://localhost:${process.env.PORT}`;

    if (process.env.LEADER_SERVER_URL !== myUrl) {
      // Forward metrics to leader
      axios.post(`${process.env.LEADER_SERVER_URL}/api/metrics`, { serverId, cpuLoad, ramUsage })
        .then(() => logger.info(`Metrics forwarded to leader from ${serverId}`))
        .catch(err => logger.error(`Error forwarding metrics to leader: ${err.message}`));
    } else {
      logger.info(`Metrics received from ${serverId} without forwarding: cpuLoad = ${cpuLoad}, ramUsage = ${ramUsage}`);
    }
  }
};
