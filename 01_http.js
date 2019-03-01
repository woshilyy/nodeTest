var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html,charset=UTF-8'
    });
    res.write('<h1>hello Nodejs</h1>');
    res.end();
}).listen(3000)