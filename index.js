const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT_EXPOSED=3535 
server.use(middlewares)
server.use(router)
server.listen(PORT_EXPOSED, () => {
  console.log('Below REST Service is available');
  console.log('http://localhost:'+PORT_EXPOSED+'/books or http://localhost:'+PORT_EXPOSED+'/mobiles');
})