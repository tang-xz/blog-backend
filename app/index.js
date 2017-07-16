const Koa = require('koa');
const favicon = require('koa-favicon');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

const {logger, log4js} = require('./utils/logger');
const router = require('./routes');

// not work correct ?
app.use(favicon(__dirname + '/favicon.ico'));

app.use(static(path.join(__dirname, 'static')), {
    maxage: 3600 * 24,
});

// listen to http log
app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }));

app.use(router.routes());

// global error log
app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;