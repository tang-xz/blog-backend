const Router = require('koa-router');
const homepage = new Router();

homepage.get('/', function(ctx, next) {
  ctx.body = 'homepage page'
});

module.exports = homepage;