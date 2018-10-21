





app.use(route.get('/api/login', async (ctx, next) => {
    const query = ctx.request.query;
    /*
     * query = {
     *  user : '御焱',
     *  password : '123456'
     * }
     */

    // 判断 query.user 和 query.password 格式是否正确
    // 待办事项……

    // 判断是否已经注册
    // 待办事项……
    
    // 判断姓名、学号是否正确
    // 待办事项……
    
    return ctx.body = {
        ok: true,
        msg: '登录成功',
        token: getToken({ user: query.user, password: query.password })
    }
}));
