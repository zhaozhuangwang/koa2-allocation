const router = require('koa-router')();

const tools=require('./../../../model/tools.js');

const DB=require('./../../../model/db.js');
var svgCaptcha = require('svg-captcha');

router.get('/phone',async (ctx)=>{

    let sname=ctx.query.name;
    if (sname.length<=0) {
        1
        return false
    }
    const data=await DB.find('user',{'phone':sname}); 
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
    ctx.body="api接口";
})



module.exports=router.routes();