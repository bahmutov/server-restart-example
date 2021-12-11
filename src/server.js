// http://expressjs.com/
const express = require('express')
// https://github.com/sindresorhus/get-port
const getPort = require('get-port')
const { makeRange } = getPort

console.log('getPort', getPort)
console.log('makeRange', makeRange)

function makeServer() {
  const app = express()
  app.get('/', function (req, res) {
    res.json({
      message: 'Hello World!',
      responseId: Math.round(Math.random() * 1e6),
      port,
    })
  })

  // const ports = makeRange(6000, 6300)
  // const port = getPort({ port: ports })
  const port = 6000

  return new Promise((resolve) => {
    const server = app.listen(port, function () {
      const port = server.address().port
      console.log('Example app listening at port %d', port)

      // close the server
      const close = () => {
        return new Promise((resolve) => {
          console.log('closing server')
          server.close(resolve)
        })
      }

      resolve({ server, port, close })
    })
  })
}

module.exports = makeServer
