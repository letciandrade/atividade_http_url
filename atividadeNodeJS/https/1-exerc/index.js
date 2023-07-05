const http = require ('http')
const port = 1111

const server = http.createServer((req, res)=>{

res.writeHead(200, {'Content-Type':'text/html'})
res.end('<meta charset="UTF-8"> <h1>Olá, mundo!</h1>')


})

server.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})