/**
 * Created by Administrator on 2018/3/20 0020.
 */
const router = require('koa-router')();

const tools=require('../../model/tools.js');

const DB=require('../../model/db.js');

var svgCaptcha = require('svg-captcha');

router.get('/',async (ctx)=>{

   // await ctx.render('admin/register');
   ctx.body="user2接口";

})
//post权限
router.post('/d',async (ctx)=>{
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
    // let username=ctx.request.body.name;
    
    // let password=ctx.request.body.pwd;
    // let code=ctx.request.body.code;
   
  
    // var time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    // console.log(ctx.request.body);
    // console.log(time);
    // console.log(tools.md5(password));
    //  if ((code==ctx.session.code) {
        
    //  }   
    // if(code==ctx.session.code) {

    //      console.log('code 已过');

    //  }else{
    //     return false
    //     console.log('code 没已过');
    //  }  
     
    // var findResult=await  DB.find('user',{"username":username});
    
    // if (findResult.length>0) {
    //     ctx.body={
    //         message:'失败',
    //         status:false,
            
    //     }
    //     console.log('存在1111111111111111');
    // }else{
    //     var addResult =await  DB.insert('user',{"username":username,"password":tools.md5(password),"status":1,"time":time});
    //     ctx.body={
    //         message:'成功',
    //         status:true,
           
    //     }
    //    console.log('存入');
    // }
 })

router.get('/user',async (ctx)=>{

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

 router.get('/code',async (ctx)=>{

    var captcha = svgCaptcha.create({
        size:4,
        width:100,
        height:50,
        background:'#cc9966'
    });
     
    ctx.session.code=captcha.text;
    ctx.response.type='image/svg+xml';
    ctx.body=captcha.data;
    
    
 })


module.exports=router.routes();