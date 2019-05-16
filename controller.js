const fs = require('fs')
const path = require('path')

function addMapping(router, mapping) {
    console.log('mapping===>', mapping)
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            let _path = url.substring(4)
            router.get(_path, mapping[url])
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            let _path = url.substring(5)
            router.post(_path, mapping[url])
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }

}

function addControllers(router, dir) {
    console.log('dir===>', dir)
    fs.readdirSync(path.join(__dirname, `${dir}`))
        .filter(item => item.endsWith('.js'))
        .forEach(ele => {
            console.log(`process controller:${ele}...`)
            let mapping = require(path.join(__dirname, `/${dir}/${ele}`))
            addMapping(router, mapping)
        })

}

module.exports = function (dir) {

    let
        controllers_dir = dir || 'controllers',
        router = require('koa-router')()
    addControllers(router, controllers_dir)
    return router.routes()
}