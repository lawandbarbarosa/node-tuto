const http = require('http');


const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.end("salam mama barbarosa")
  }

  if(req.url === '/about'){
    res.end("salam bra bashit")
  }

  res.end(`
  <h1>Oops!</h1>
  <P> we can't seem to find the page</p>
  <a href="/">back home</a>
  `)

console.log(req)
res.write("salam mama gull ")
res.end()
})

server.listen(5000)