/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();
var DB=require('../model/db.js');

//var slysjj=require('./index/slysjj.js');
//var daojia=require('./index/zjys/daojia.js');
var url=require('url');



router.get('/',async (ctx)=>{
   
   
  
    await ctx.render('defauit/index',{
       
    })
})




//router.use('/slysjj',slysjj);
//router.use('/daojia',daojia);
module.exports=router.routes();