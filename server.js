const express = require('express');
const path = require('path');
const app = express();

//Use port 1337 by default
app.set('port', (process.env.PORT || 1337));

//Server index file located in 'client' directory
app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/api/whoami', function(req, res) {
  
  //Set object properties using request headers
  var results = {
    ipaddress: req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress,
    language: req.acceptsLanguages()[0],
    software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
  }
  
  //If error with results objet, send internal server error
  if (!results) {
    res.sendStatus(500);
  //Otherwise, return results
  } else {
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(results));
  }

});

app.listen(app.get('port'));
console.log(`Server listening on port ${app.get('port')}`);


