const router = require('koa-router')();

const tools=require('./../../model/tools.js');

const DB=require('./../../model/db.js');
var svgCaptcha = require('svg-captcha');


var nav=require('./index/nav.js');

router.get('/',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('user',{'username':sname}); 
    
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
            data:data[0]
        }
        
    }
})
router.use('/nav',nav);


module.exports=router.routes();