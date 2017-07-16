const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const {logger, log4js} = require('./utils/logger');
const router = require('./routes')

app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }));

app.use(router.routes());

// global error log
app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;