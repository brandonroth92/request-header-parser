const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 1337));

app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/api/whoami', function(req, res) {
  
  var results = {
    ipaddress: req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress,
    language: req.acceptsLanguages()[0],
    software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
  }
  
  if (!results) {
    res.sendStatus(500);
  } else {
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(results));
  }

});

app.listen(app.get('port'));
console.log(`Server listening on port ${app.get('port')}`);


