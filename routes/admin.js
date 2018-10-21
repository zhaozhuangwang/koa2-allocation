/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();
//引入模块

var login=require('./admin/login.js');

var user=require('./admin/user.js');

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
        if (pathname=='/admin/login' || pathname=='/admin/login/doLogin' || pathname=='/admin/login/code') {
            
            await next();

        }else{

            ctx.redirect('/admin/login');

        }
        
    }

    
});

router.get('/',async (ctx)=>{

    await ctx.render('admin/index');

})

router.use('/login',login);
router.use('/user',user);


module.exports=router.routes();