import express from 'express';
import http from 'http';

const app = express();
const port = process.env.PORT || 5000
const server = http.createServer(app) 
app.get('/', (req, res) => {
 res.status(200).send('welcome to my app')
})
server.listen(port)
console.log(`app listening on ${port}`)
