import logger from '../src/utils/logger';

// disable winston logging for tests
logger.transports.forEach(t => {
  t.silent = true;
});
