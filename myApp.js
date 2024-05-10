const express = require('express');
const helmet = require('helmet');
const app = express();











module.export = app;
const api=require ('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api',api);
app.get("/",function (request, response){response.sendFile(__dirname + '/view/index.html');});
let port = process.env.PORT || 3000;
app.listen(port, () => {cosole.log ('Useful Programmer Info Security App Started on port ${port}');});





































