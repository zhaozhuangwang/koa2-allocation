const router = require('koa-router')();

const tools=require('../../model/tools.js');

const DB=require('../../model/db.js');
var svgCaptcha = require('svg-captcha');


router.get('/',async (ctx)=>{
    ctx.body="api接口";
})



module.exports=router.routes();