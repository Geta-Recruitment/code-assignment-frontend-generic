const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const openapi = require('express-openapi');
const port = 8081;

const app = express();
app.use(cors());
app.use(express.json());

openapi.initialize({
  app,
  apiDoc: fs.readFileSync(path.resolve(__dirname, 'api-doc.yml'), 'utf8'),
  paths: path.resolve(__dirname, 'api-routes')
});

app.use(function (err, req, res, next) {
  res.status(err.status).json(err);
});

module.exports = app;

app.listen(port, () => console.log(`Server listening on port ${port}.`));
