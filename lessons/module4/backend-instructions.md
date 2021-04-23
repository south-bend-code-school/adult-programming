# Backend
# Review Course Progress So Far
- Remind them of HTML, CSS, JavaScript, and SQL

# Where do the files live?  How do they get sent to to me when I visit a webpage in my browser?
- Review that web pages are served from a server
## What is a server?
- Any computer connected to the internet can be a web server.
- Servers have addresses so we can find them on the internet; just like houses.  This is called an IP address.
- However, typing the IP address in is not easy, so we use domains to create rememberable addresses
- A domain name is an alias for an IP address and is registered with the global domain name servers (DNS)
- Visit https://www.vrbo.com/
-  Once we get to the house, we need to know what door to use.  This is the port.  The door has to be open to requests.  By default for security reasons, ports are not open until we tell them to be.
- The server is literally just a program that listens for incoming requests on a port.  When someone makes a request it does its best to handle that.

- We can write these servers in any language.  Because many programmers learned JavaScript to manipulate the dom, node Js, or JavaScript that runs server side, has skyrocketed in popularity 
Let’s build a simple web server in NODE

## Build a web server in NODE

### Downloads
- https://nodejs.org/en/
- https://code.visualstudio.com/

### Tip
- If the webserver crashes, to terminate any running processes on your port run: killall -9 node
- https://www.w3schools.com/nodejs

### Build a simple webserver
var http = require('http');
  
http.createServer(function (req, res) { 
    res.write('hello'); 
    res.end();
}).listen(8080)




### Build a complex webserver that reads in HTML files
#### Step 1, navigate multipage site.  Index.html, pets.html, kids.html
- Build the HTML files for these 3 sites

- Build the my-second-http-server.js

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


https://www.w3schools.com/nodejs/nodejs_url.asp
Build hello world
Build the ability to parse the url
Build the abilities send files based on the url path
Use our wireframe example
Build the ability to perform logic server side using the query parameters
we cannot leave our personal computers on all the time, plus we are using consumer grade internet which means we have dynamic ins which change frequently 
.  We need a dedicated server to run our node.js application.
Welcome to the cloud.  
Show. An ima ge of an actual data center and the matrix movie
Explain that the could is simply gain t banks of servers being offered by big corporations that I can rent for small amounts of money
Explain the cloud Pyramid
SaaS
PaaS
IaaS
show AWS, MS, Google for IaaS like ec2





￼
' 