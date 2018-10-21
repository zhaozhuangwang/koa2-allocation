/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();
var DB=require('../model/db.js');

//user
var user=require('./api/user.js');
var index=require('./api/index.js');

router.get('/',async (ctx)=>{
    ctx.body="api接口";
})


router.use('/user',user);
router.use('/index',index);
module.exports=router.routes();