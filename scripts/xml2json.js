let axios = require('axios')
let parser = require('xml2json')
// xml2json xml2json:parser.toJson or json2xml:parser.toXml()

axios.get('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1')
.then(resp => { 
    let json = parser.toJson(resp.data)
    console.log('json===>',json)
 })