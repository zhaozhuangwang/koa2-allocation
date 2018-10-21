var app={
    dbUrl: 'mongodb://zzw:lanmo1991@101.200.56.100:27017/koa',
    dbName: 'koa',
    opts: {
        auth: {
            authMechanism: 'MONGODB-CR', // 如果使用 SCRAM-SHA-1 认证则不需要此参数
            authSource: 'readWrite'
        }
    }
}

module.exports=app;