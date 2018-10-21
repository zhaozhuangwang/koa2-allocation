/**
 * Created by Administrator on 2018/3/20 0020.
 */
const router = require('koa-router')();

const tools=require('../../model/tools.js');
const jwtKoa = require('koa-jwt');
const jwt = require('jsonwebtoken');
        
const DB=require('../../model/db.js');
var svgCaptcha = require('svg-captcha');

const   secret = 'secret',
        util = require('util'),
        verify = util.promisify(jwt.verify) ;// 解密
//post权限
// router.post('/doLogin',async (ctx)=>{
//     console.log(ctx.request.body);
//     let username=ctx.request.body.phone;
//     let password=ctx.request.body.pwd;
//     let code=ctx.request.body.verify;
//     var code1=ctx.session.code
    
//     var result=await DB.find('user',{"phone":username,"pwd":tools.md5(password)});
//         if (result.length>0) {
            
//             ctx.session.userinfo=result[0];
            
//             console.log('OK');
//         } else {
//             console.log('shibai');
            
//         }
    
    
//  })
router.post('/doLogin', async (ctx, next) => {
    const user = ctx.request.body
    let phone=ctx.request.body.phone;
    let pwd=ctx.request.body.pwd;
    
    var result=await DB.find('user',{"username":phone,"password":tools.md5(pwd)});
     
    if (result.length>0) {
        
        const token = jwt.sign({ user: phone, password: pwd }, secret, {expiresIn: '1h'})  //token签名 有效期为1小时
        
        console.log('OK');
         ctx.body = {
            message: '获取token成功',
            status:true,
            token
        }
    } else {
        console.log('shibai');
        ctx.body= {
            message: '参数错误',
            status:false,
        }
        
    }
})

// router.get('/index', async (ctx) => {
//     const token = ctx.header.authorization  // 获取jwt
//     console.log(token ,'获取到了');
//     console.log(verify.secret);
//     if (token) {
//         const  payload =await verify(token.split(" ")[1], secret)  // // 解密，获取payload
//         ctx.body = {
//             payload
//         }
//     } else {
//         ctx.body = {
//             message: 'token 错误',
//             code: -1
//         }
//     }
    
// })
 router.get('/code',async (ctx)=>{
    //ctx.body='验证码';


    //加法的验证码
    //var captcha = svgCaptcha.createMathExpr({
    //    size:4,
    //    fontSize: 50,
    //    width: 100,
    //    height:40,
    //    background:"#cc9966"
    //});

    var captcha = svgCaptcha.create({
        size:4,
        fontSize: 50,
        width: 120,
        height:50,
        background:"#cc9966"
    });
    //console.log(captcha.text);

    //保存生成的验证码
    ctx.session.code=captcha.text;
    //设置响应头
    ctx.response.type = 'image/svg+xml';
    ctx.body=captcha.data;
})

 
module.exports=router.routes();