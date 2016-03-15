var http = require('http');
var url = require('url');

var counter = 0;

var server = http.Server(function (req, res) {

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    var urlParsed = url.parse(req.url, true);

    if (urlParsed['pathname'] == '/index.html') {
        counter++;
        res.end('Привіт світ!');
    } else if (urlParsed['pathname'] == '/count.html') {
        res.end('Кількість запитів до сторінки index.html - ' + counter);
    } else {
        res.statusCode = 404;
        res.end('Page not found!');
    }

});


server.listen(3000, '127.0.0.1');