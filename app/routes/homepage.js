const Router = require('koa-router');
const homepage = new Router();

homepage.get('/', async function(ctx, next) {
  await ctx.render('index', {
    user: 'tangxz'
  });
});

module.exports = homepage;