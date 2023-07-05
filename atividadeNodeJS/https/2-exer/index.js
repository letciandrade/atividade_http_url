const http = require('http')
const port = 1212

const server = http.createServer((req,res)=>{

    if(req.url === '/home'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<meta charset="UTF-8"> <h1>Bem-vindo à página inicial!</h1>')
    }
       
     else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end('<meta charset="UTF-8"> <h1>Sobre nós: somos uma empresa dedicada a ajudar você</h1>')
    }

})

    server.listen(port, ()=>{
        console.log(`Servidor rodando na porta ${port}`)
    })
