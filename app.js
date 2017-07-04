// 项目入口
var fs = require('fs');
var path = require('path');
// 导入express模块
var express = require('express');
// 创建express服务器的实例
var app = express();
// 托管静态资源
app.use('/node_modules',express.static('node_modules'));
// 设置模板引擎
app.set('view engine','ejs');
//模板存放路径
app.set('views','./views');
// 首页模板渲染
var routerModule = require('./router/indexRouter.js')
app.use(routerModule);
// 调用app.listen方法,指定端口号并启动web服务器;
app.listen(3005,function(){
    console.log('Express sever running at http://127.0.0.1:3005')
})

