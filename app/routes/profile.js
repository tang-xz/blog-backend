const Router = require('koa-router');
const profile = new Router();

profile.get('/', function(ctx, next) {
  ctx.body = 'profile page'
});

module.exports = profile;