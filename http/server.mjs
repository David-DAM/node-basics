import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const processRequest = (req, res) => {
    let method = req.method;

    switch (method) {
        case 'GET':
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.statusCode = 200;
            switch (req.url) {
                case '/':
                    res.end("Home");
                    break;
                default:
                    res.statusCode = 404;
                    res.end("Not Found");
                    break;
            }
            break;
        case 'POST':
            let body = '';

            switch (req.url) {
                case '/data':

                    req.on('data', chunk => {
                        body += chunk.toString()
                    })

                    req.on('end', () => {
                        const data = JSON.parse(body);

                        res.writeHead(201,{'Content-Type': 'application/json; charset=utf-8'});
                        data.timestamp = Date.now();
                        res.end(JSON.stringify(data));
                    });
                    break;
            }
            break;
        default:
            res.statusCode = 404;
            res.end("Not Found");
            break;

    }
}

const server = createServer(processRequest);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


