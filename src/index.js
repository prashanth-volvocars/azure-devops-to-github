const express = require('express');
const app = express();
const port = 3000;


app.get('/demo', (req, res) => {
  res.send('GitHub Action To EKS Demo Working Fine');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
