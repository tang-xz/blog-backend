const Router = require('koa-router');
const router = new Router();

const homepage = require('./homepage');
const auth = require('./auth');
const profile = require('./profile');

router.use('/', homepage.routes());
router.use('/auth', auth.routes());
router.use('/profile', profile.routes());

module.exports = router;