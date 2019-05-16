const Router = require('koa-router')
const home = new Router()

let axios = require('axios')
let cheerio = require('cheerio')
// let url = 'https://www.leiphone.com/category/sponsor'
let url = 'http://news.baidu.com/'



home.get('/', async (ctx, next) => {
    axios.get(url).then(item => {
        let $ = cheerio.load(item.data)
        let arr = []
        $('div#pane-news ul li a').each((index, ele) => {
            console.log('ele===>', ele)
            let news = {
                title: $(ele).text(),
                href: $(ele).attr('href')
            }
            arr.push(news)
        })
        ctx.response.status = 200
        ctx.response.body = arr
        await next()
    })
})

module.exports = home