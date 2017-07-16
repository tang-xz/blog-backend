const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = require('./routes')

app.use(router.routes());

app.on('error', function(err, ctx){
    if (process.env.NODE_ENV != 'test') {
        console.log(err.message);
        console.log(err);
    }
});

module.exports = app;