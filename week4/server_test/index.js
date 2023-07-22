const http = require('http');
const fs = require('fs');

function whenIncomingRequest(request, response) {
    if(request.url == '/' || request.url == '/index.html') {
        const html = fs.readFileSync('index.html', 'utf-8');
        response.end(html);
        return;
    }

    if(request.url === '/todolist' && request.method === 'GET') {
        if(!fs.existsSync('todoList.txt')) {
            fs.writeFileSync('todoList.txt', '');
        }
        const todoList = fs.readFileSync('todoList.txt', 'utf-8');
        response.end(todoList.trim());
        return;
    }

    if(request.url === '/todolist' && request.method === 'POST') {
        let body = '';
        console.log(request.headers);
        request.on('data', (chunk) => {
            body += chunk;
        });
        request.on('end', () => {
            fs.appendFileSync('todoList.txt', body + '\n');
            response.end('ok');
        });
    }

    if(request.url === '/todolist' && request.method === 'DELETE') {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk;
        });
        request.on('end', () => {
            const todoList = fs.readFileSync('todoList.txt', 'utf-8').trim().split('\n');
            if(!todoList.includes(body)) {
                response.statusCode = 404;
                response.end('not found');
                return;
            }
            fs.writeFileSync('todoList.txt', todoList.filter(item => item !== body).join('\n'));
            response.end('ok');
        });
    }
}

const server = http.createServer(whenIncomingRequest);

server.listen(3000);