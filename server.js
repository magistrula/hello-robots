var express = require('express'),
    fs = require('fs'),
    app = express();

app.use(express.static('app'));

app.get('/robots', function (request, response, next) {
  fs.readdir('app/img', function (err, files) {
    response.send(files);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;
  console.log('Server listening at ' + host + ':' + port);
});