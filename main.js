const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const product = [
  { id: 1, name: 'Indomie', stock: 100 },
  { id: 2, name: 'Sedaap', stock: 100 },
];

const mid = (req, res, next) => {
  console.log('test');
  next();
};

// http://localhost:5000/product
app.get('/product', mid, (req, res) => {
  res.status(200).json({
    message: 'Data products',
    data: product,
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
