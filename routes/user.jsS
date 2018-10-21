/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();
//引入模块

var login=require('./user/login.js');

var register=require('./user/register.js');
var forget=require('./user/forget.js');
var api=require('./user/api.js');
const DB=require('./../model/db.js');
const ueditor = require('koa2-ueditor');

var url=require('url');



//配置中间件  获取URL

router.use(async (ctx,next)=>{
    //模版引擎配置全局变量
    // console.log(ctx.request.header.host);
    
    // ctx.state._HOST_='//'+ctx.request.header.host;
    
    var pathname=url.parse(ctx.request.url).pathname;
    console.log(ctx.session.userinfo);
    if (ctx.session.userinfo) {
        
        await next();

    } else {
        // if (pathname=='/admin/login' || pathname=='/admin/login/doLogin' || pathname=='/admin/login/code') {
            
        //     await next();

        // }else{

        //     ctx.redirect('/admin/login');

        // }
        // 
        await next();
    }

    
});

router.get('/phone',async (ctx)=>{

    let sname=ctx.query.name;
    if (sname.length<=0) {
        1
        return false
    }
    const data=await DB.find('user',{'phone':{$regex:sname}}); 
    //console.log(result);
    if (data.length<=0) {
       ctx.body={
            message:'失败',
            status:false
        }
        
    }else{
        ctx.body={
            message:'成功',
            status:true,
            
        }
        
    }
})

router.get('/',async (ctx)=>{

    ctx.body="user接口";

})

router.use('/login',login);
router.use('/register',register);
router.use('/forget',forget);
router.use('/api',api);
module.exports=router.routes();