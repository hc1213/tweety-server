const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const controller = require('./controller')
const serve = require('koa-static')
const compose = require('koa-compose')


app.use(bodyParser());
// 托管静态资源文件
const publicPath = path.join(__dirname, './public')
app.use(serve(publicPath))

app.use(controller())

app.listen(process.env.PORT || 3000);
console.log(`koa has started at port:${process.env.PORT || 3000}`)