const router = require('koa-router')();

const tools=require('./../../model/tools.js');

const DB=require('./../../model/db.js');
var svgCaptcha = require('svg-captcha');


var login=require('./user/login.js');
var register=require('./user/register.js');
var forget=require('./user/forget.js');
var api=require('./user/api.js');
var index=require('./user/index.js');


router.get('/',async (ctx)=>{

    ctx.body="user接口";
})
router.use('/login',login);
router.use('/register',register);
router.use('/forget',forget);
router.use('/api',api);
router.use('/index',index);


module.exports=router.routes();