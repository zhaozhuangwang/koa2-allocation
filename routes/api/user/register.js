/**
 * Created by Administrator on 2018/3/20 0020.
 */
const router = require('koa-router')();

const tools=require('./../../../model/tools.js');

const DB=require('./../../../model/db.js');

var svgCaptcha = require('svg-captcha');
const fs = require('fs');
var url=require('url');
router.get('/',async (ctx)=>{

    console.log(ctx.session);
   await ctx.render('register');
   // ctx.body="user2接口";

})
//post权限
router.post('/d',async (ctx)=>{
    const file = ctx.request.body;  // 获取上传文件
    console.log(file);
    const reader = fs.createReadStream(file.path);    // 创建可读流
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    // const upStream = fs.createWriteStream(`upload/${Math.random().toString()}.${ext}`);        // 创建可写流
    // reader.pipe(upStream);    // 可读流通过管道写入可写流
    console.log(ext);
    return ctx.body = '上传成功';
})
// router.post('/d',async (ctx)=>{
   
//     let username=ctx.request.body.name;
    
//     let password=ctx.request.body.pwd;
//     let code=ctx.request.body.code;
   
  
//     var time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
//     console.log(ctx.request.body);
//     console.log(time);
//     console.log(tools.md5(password));
//      if ((code==ctx.session.code) {
        
//      }   
//     if(code==ctx.session.code) {

//          console.log('code 已过');

//      }else{
//         return false
//         console.log('code 没已过');
//      }  
     
//     var findResult=await  DB.find('user',{"username":username});
    
//     if (findResult.length>0) {
//         ctx.body={
//             message:'失败',
//             status:false,
            
//         }
//         console.log('存在1111111111111111');
//     }else{
//         var addResult =await  DB.insert('user',{"username":username,"password":tools.md5(password),"status":1,"time":time});
//         ctx.body={
//             message:'成功',
//             status:true,
           
//         }
//        console.log('存入');
//     }
//  })

router.post('/doLogin', async (ctx) => {
    console.log(ctx.request.body);
    let username=ctx.request.body.username;
    let password=ctx.request.body.password;
    let code=ctx.request.body.code;
    console.log(tools.md5(password));
    console.log(ctx.session.info);



    if(code==ctx.session.code){

        var result=await DB.find('user',{"username":username,"password":tools.md5(password)});
        if (result.length>0) {
             ctx.body = {
                message: "已注册",
                status:false,
            }
        } else {
        var result=await  DB.insert('user',{"username":username,"password":tools.md5(password),"status":1,"time":time});    
            ctx.body = {
                message:"成功" ,
                status:true,
            }
        }
    }else{
        console.log('验证码失败');
         ctx.body = {
            message:"验证码失败",
            status:false,
        }
        
    }
})

 router.get('/code',async (ctx)=>{

    var captcha = svgCaptcha.create({
        size:4,
        width:100,
        height:50,
        background:'#cc9966'
    });
    
    ctx.session.info=captcha.text;
    ctx.response.type='image/svg+xml';
    ctx.body=captcha.data;
    console.log(ctx.session);
    
 })


module.exports=router.routes();