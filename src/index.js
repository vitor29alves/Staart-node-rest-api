const http = require('http')

const server = http.createServer((request, response) => {


  // GET /hello/:name -> Hello ${name}!

  if (request.method === "GET" && /^\/hello\/\w+$/.test(request.url)) {
    const [, , name] = request.url.split('/')
    response.writeHead(200)
    response.end(`Hello World ${name}!`)
    return
  }



  // GET /hello -> Hello World!

  if (request.method === "GET" && request.url.startsWith('/hello')) {
    response.writeHead(200)
    response.end('Hello World!')
    return
  }


  // POST /echo
  if (request.method === "POST" && request.url.startsWith('/echo')){

    response.writeHead(200)
    request.pipe(response)
    return
  }


  response.writeHead(404)
  response.end('Resource not found')

})



server.listen(3000, () => {
  console.log('Server started')
})
