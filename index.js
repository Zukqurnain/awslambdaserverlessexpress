const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// module.exports.handler = serverless(app);

app.listen(4000 , () => {
  console.log("server running")
})