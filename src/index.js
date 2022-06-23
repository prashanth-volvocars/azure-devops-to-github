const express = require('express');
const app = express();
const port = 3000;


app.get('/demo', (req, res) => {
  res.send('GitHub Action To EKS Demo Working Fine '+ process.env.ENV1 + process.env.ENV2 + process.env.OUTER_ENV);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
