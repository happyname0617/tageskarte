var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];
const express = require('express')
const path = require('path');
var app = express()



app.use(express.static(path.join(__dirname, 'static')))


app.listen(process.env.PORT || config.NODE_PORT, process.env.IP || "0.0.0.0",function(){
  console.log('listening on %s',process.env.PORT||config.NODE_PORT)
})