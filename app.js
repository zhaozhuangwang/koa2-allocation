//引入 koa模块
var Koa=require('koa'),
    router = require('koa-router')(),
    path=require('path'),
    render = require('koa-art-template'),
    static = require('koa-static'),
    session = require('koa-session'),
    sd = require('silly-datetime'),
    jsonp = require('koa-jsonp'),
    bodyParser = require('koa-bodyparser'),
    cors = require('koa2-cors'),
    historyApiFallback = require('koa2-connect-history-api-fallback'),
    jwt = require('jsonwebtoken'),
    jwtKoa = require('koa-jwt');
// handle fallback for HTML5 history API
//实例化
var app=new Koa();
//配置jsonp的中间件
app.use(jsonp());

//配置后台允许跨域    允许跨域安全性如何解决       签名验证
//app.use(cors());s

app.use(jwtKoa({secret: 'secret' }).unless({
        path: [
            /^\/api\/user\/login/,
            /^\/api\/user\/register/,
            /^\/api\/user\/forget/,
            /^\/api\/user\/api/,
            /^((?!\/api\/user).)*$/   // 设置除了私有接口外的其它资源，可以不需要认证访问
        ]
    }
))
app.use((ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                ok: false,
                msg: err.originalError ? err.originalError.message : err.message
            }
        } else {
            throw err;
        }
    });
});


//配置post提交数据的中间件
app.use(bodyParser());

//配置session的中间件
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess',
    maxAge: 864000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,   /*每次请求都重新设置session*/
    renew: false,
};
app.use(session(CONFIG, app));
//配置刷新中间件 跳转白名单   首页指向 vue 打包   ，删除首页指向ivews文件夹
app.use(historyApiFallback({ whiteList: ['/piblic','/api','/admin','views'] }));



//配置模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production',
    dateFormat:dateFormat=function(value){
        return sd.format(value, 'YYYY-MM-DD HH:mm');
    } /*扩展模板里面的方法*/
});

//public/upload/1525251917221.png
//配置中间件

//app.use(static('.'));   不安全

//配置 静态资源的中间件
app.use(static(__dirname + '/public'));
app.use(cors({
    origin: function(ctx) {
      if (ctx.url === '/api') {
        return '*';
      }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'application/json;charset=utf-8'],
  }));
//引入模块
var index=require('./routes/index.js');
var api=require('./routes/api.js');
var admin=require('./routes/admin.js');


router.use('/admin',admin);
router.use('/api',api);

router.use(index);
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
// routes definition

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
