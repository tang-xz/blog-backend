const log4js = require('koa-log4');
const {LOG4JS_CONFIG, BASE_DIR} = require('./../config');

log4js.configure(LOG4JS_CONFIG, { cwd: BASE_DIR });
const logger = log4js.getLogger("koa-project");

module.exports = {
    log4js,
    logger,
};