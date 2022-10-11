const fs = require('fs');
let mes = '';
const requestHandler = (request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === '/') {
    response.write('<html>');
    response.write('<head><title>Home Page</title></head>');
    response.write(
    `<body>
    Hello from node js server
    <h1>${mes?mes:'Enter your name'}</h1>
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
    const body = [];
    request.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      mes = message;
      fs.writeFile('message.txt', message, (err)=>{
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
      });
      // writeFileSync blocks the execution
      // console.log(parsedBody);
    });
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
}

module.exports = requestHandler;
  