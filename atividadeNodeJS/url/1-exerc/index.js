const url = require('url')

const address = 'https://sinensisscans.com/inicio1/manga/'


const parsedUrl = new url.URL(address)

console.log(parsedUrl.pathname)
console.log(parsedUrl.host)
console.log(parsedUrl.search)

