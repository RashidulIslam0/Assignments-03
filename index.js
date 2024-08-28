const http = require('http');
const fs = require('fs');
const PORT=5500
// Create the server
const server = http.createServer((req, res) => {
    // Set the content type for the response
    res.setHeader('Content-Type', 'text/plain');

    // Route handling
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('This is the Home Page');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('This is the About Page');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('This is the Contact Page');
    } else if (req.url === '/file-write') {
        // File writing operation
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error writing to file');
            } else {
                res.statusCode = 200;
                res.end('File written successfully');
            }
        });
    } else {
        // Handle 404 Not Found
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

// Start the server and listen on port 5500
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
