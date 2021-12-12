// example starting and closing the server
const makeServer = require('./server')
makeServer().then((server) => {
  server.close()
})
