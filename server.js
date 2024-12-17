const express = require('express');
const next = require('next');
const path = require('path');
const cors = require('cors');

// Initialize Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Create Express server
const server = express();
server.use(cors())

// Serve Next.js pages and static files
server.all('*', (req, res) => {
  return handle(req, res);
});

// Start the server
app.prepare().then(() => {
  server.listen(3001, '0.0.0.0',(err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
