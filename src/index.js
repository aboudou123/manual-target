const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ service: 'manual-target', status: 'ok' }));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

if (require.main === module) {
  app.listen(PORT, () => console.log('manual-target listening on ' + PORT));
}
module.exports = app;