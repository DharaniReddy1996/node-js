const http=require('http');
const fs=require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        console.log(body);
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            console.log(body);
        });

        req.on('end', () => {
            console.log(Buffer.toString());
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message1=parsedBody.split('=');
            console.log(message1);
          //  const message = parsedBody.split('=')[1];
            const message=message1[1];
            fs.writeFileSync('message.txt', message);
        });

        res.statusCode=302;
        console.log('Hi');
        res.setHeader('Location','/'); 
        // by writting above three line code,after hitting send the page return to the same page not to message page in address bar
        
        // if we do not write the above code the page goes to message in address bar
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

});
server.listen(5000);