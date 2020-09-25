const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// GET, POST, PUT, DELETE
app.get('/product', (req, res) => {
  res.status(200).json({
    message: 'Data product',
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
