var Koa=require('koa'),
    router = require('koa-router')(),
     jwt = require('jsonwebtoken'),
     jwtKoa = require('koa-jwt'),
     util = require('util'),
     verify = util.promisify(jwt.verify), // 解密
     bodyParser = require('koa-bodyparser'),
     secret = 'jwt demo';
     
const ueditor = require('koa2-ueditor');
var url=require('url');


// router.post('/doLogin', async (ctx, next) => {
//     const user = ctx.request.body
//     let phone=ctx.request.body.phone;
//     let pwd=ctx.request.body.pwd;
    
//     var result=await DB.find('user',{"username":phone,"password":tools.md5(pwd)});
     
//     if (result.length>0) {
        
//         const token = jwt.sign({ user: phone, password: pwd }, secret, {expiresIn: '60s'})  //token签名 有效期为1小时
        
//         console.log('OK');
//          ctx.body = {
//             message: '获取token成功',
//             status:true,
//             token
//         }
//     } else {
//         console.log('shibai');
//         ctx.body= {
//             message: '参数错误',
//             status:false,
//         }
        
//     }
// })
// router.get('/info', async (ctx) => {
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



module.exports=router.routes();