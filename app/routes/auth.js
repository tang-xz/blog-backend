const Router = require('koa-router');
const auth = new Router();

auth.get('/', function(ctx, next) {
  ctx.body = 'auth page'
});

module.exports = auth;