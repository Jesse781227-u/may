import http from 'http';
import { handleWebhook } from './webhook.js';

const port = Number(process.env.PORT || 3001);

const server = http.createServer((req, res) => {
  if (req.url === '/api/webhook') {
    handleWebhook(req, res);
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ ok: false, message: 'Not found' }));
});

server.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});
