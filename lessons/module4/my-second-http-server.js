var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  // The webserver recieved a request!

  // Identify the base URL (so, if the URL was www.example.com/wordfun, then www.example.com is the base
  var baseURL = 'http://' + req.headers.host + '/';
  var my_url = new URL(req.url, baseURL);

  // The pathname is the file we want to load
 
  
  filename = "." //The '.' means this directory.

  // Retrieve HTTP File from our server
  if(my_url.pathname == "/") {
    filename = filename + my_url.pathname + "index.html"
  } else {
    filename = filename + my_url.pathname + ".html";
  }

  // Calculator Path
  if(my_url.pathname == "/calc") {
    x = my_url.searchParams.get('x') || 0 // If we don't have a x paramater, then use 0.
    y = my_url.searchParams.get('y') || 0 // If we don't have a y paramater, then use 0.
    z = (Number(x) + Number(y)) || 0 //if we can't add x + y, then return 0.
    return res.end(String(z));
  }

  console.log(filename)
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });


}).listen(8080);