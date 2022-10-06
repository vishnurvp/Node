const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  response.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    response.write('<html>');
    response.write('<head><title>Home Page</title></head>');
    response.write(
    `<body>
    Hello from node js server
    <h1>Enter your name</h1>
    <br/>
    <form action='/message' method='POST'>
    <input type='text' name='name'/>
    <button type='submit'>Submit</button>
    </form>
    </body>`);
    response.write('</html>');
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'Dummy');
    response.statusCode = 302;
    response.setHeader('Location', '/');
    return response.end();
  }

  if (url === '/home') {
    response.write('<h1>Welcome Home</h1>');
    return response.end();
  }

  if (url === '/about') {
    response.write('<h1>Welcome to about yourself</h1>');
    return response.end();
  }

  if (url === '/node') {
    response.write('<h1>Welcome to Node js server project</h1>');
    return response.end();
  }
  
});

server.listen(4000, ()=>{
  console.log('vishnuprasad');
});
