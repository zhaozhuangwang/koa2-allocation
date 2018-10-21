/**
 * Created by Administrator on 2018/3/20 0020.
 */
const router = require('koa-router')();

const tools=require('../../model/tools.js');

const DB=require('../../model/db.js');
var svgCaptcha = require('svg-captcha');

router.get('/',async (ctx)=>{

   await ctx.render('admin/register');

})
//post权限
router.post('/',async (ctx)=>{
    console.log(ctx.request.body);
    let username=ctx.request.body.username;
    let password=ctx.request.body.password;
    
    console.log(tools.md5(password));
    if(code==ctx.session.code){

        var result=await DB.find('user',{"username":username,"password":tools.md5(password)});
        if (result.length>0) {
        
            ctx.session.userinfo=result[0];
            ctx.redirect(ctx.state._HOST_+'/')

            console.log('OK');
        } else {
            console.log('shibai');
            
        }
    }else{
        console.log('验证码失败');
        
    }
 })

//  router.get('/code',async (ctx)=>{

//     var captcha = svgCaptcha.create({
//         size:4,
//         width:100,
//         height:40,
//         background:'#428bca69'
//     });
     
    
//     ctx.response.type='image/svg+xml';
//     ctx.body=captcha.data;

 
//  })


module.exports=router.routes();