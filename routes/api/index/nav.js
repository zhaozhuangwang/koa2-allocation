const router = require('koa-router')();

const tools=require('./../../../model/tools.js');

const DB=require('./../../../model/db.js');
var svgCaptcha = require('svg-captcha');

router.get('/',async (ctx)=>{
    ctx.body="nav接口";
})

router.get('/searh',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('searh',{'name':{$regex:sname}}); 
    //console.log(result);
    if (data.length<=0) {
     return ctx.body={
            message:'失败',
            status:404
        }
        
    }else{
        ctx.body={
            message:'成功',
            status:true,
            data:data
        }
        
    }
})

router.get('/menu',async (ctx)=>{
    let sname=ctx.query.name;
    
    const data=await DB.find('nav',{'name':sname});
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
router.get('/daoJia',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('daoJia',{'name':sname}); 
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
router.get('/ruJia',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('ruJia',{'name':sname}); 
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
router.get('/jingdian',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('yang',{'name':sname}); 
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
router.get('/shiLiao',async (ctx)=>{

    let sname=ctx.query.name;
    
    const data=await DB.find('shiLiao',{'name':sname}); 
    
    
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

router.get('/qin',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('qin',{'name':sname}); 
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
router.get('/qi',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('qi',{'name':sname}); 
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
router.get('/shu',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('shu',{'name':sname}); 
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

router.get('/hua',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('hua',{'name':sname}); 
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
router.get('/zhenCi',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('zhenCi',{'name':sname}); 
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
router.get('/guaSha',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('guaSha',{'name':sname}); 
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
router.get('/huoGuan',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('huoGuan',{'name':sname}); 
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
router.get('/aiJiu',async (ctx)=>{

    let sname=ctx.query.name;
    const data=await DB.find('aiJiu',{'name':sname}); 
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
module.exports=router.routes();