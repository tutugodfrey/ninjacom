import Server from './../app'
import http from 'http';
const app = new Server().expressServer();
const port = process.env.PORT || 5000
const server = http.createServer(app) 
server.listen(port)
console.log(`app listening on ${port}`)