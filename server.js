import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const server = http.createServer(app);

  // Create Vite server in middleware mode and connect HMR WebSocket.
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      hmr: {
        server, // This connects Vite's HMR to our server
      },
    },
    appType: 'spa',
    root: __dirname,
  });

  // Use vite's connect instance as middleware.
  app.use(vite.middlewares);

  const port = process.env.PORT || 3002;
  server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log('You can now open your browser to view the application.');
  });
}

createServer();