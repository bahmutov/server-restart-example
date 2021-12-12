// @ts-check
// http://expressjs.com/
const express = require('express')
// https://github.com/sindresorhus/get-port
const getPort = require('get-port')
const { makeRange } = getPort

function makeServer() {
  // the port value will be set later
  let port
  const app = express()
  app.get('/', function (req, res) {
    res.json({
      message: 'Hello World!',
      responseId: Math.round(Math.random() * 1e6),
      port,
    })
  })

  // random number between 6100 and 6300
  const n = Math.round(Math.random() * 200) + 6100
  const ports = makeRange(n, 6300)
  return getPort({ port: ports }).then((p) => {
    port = p
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
  })
}

module.exports = makeServer
