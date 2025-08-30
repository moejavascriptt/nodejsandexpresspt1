const http = require('http')
// create a server
const server = http.createServer((req, res) => {
  // log request details
  console.log(`Recieved ${req.method} request for:${req.url}`)
  // set status code and headers
  res.writeHead(200, { 'content-type': 'text/plain' })

  //
  res.end('heelo w fris is my fist node server')
})

//define the port
const PORT = 5000
// start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log('Press Ctrl+C to stop the server')
})
