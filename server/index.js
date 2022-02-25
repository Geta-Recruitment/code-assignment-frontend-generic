const express = require('express');
const cors = require('cors');
const products = require('./products.json');
const port = 8081;

// create in-memory database
const database = {
  products,
  config: {
    taxRate: 0.21
  },
  cart: {
    items: [
      {
        id: '1',
        amount: 1
      }
    ],
    get totalItems() {
      return this.items.reduce((acc, curr) => (acc += curr.amount), 0);
    },
    get subtotal() {
      return this.items.reduce((acc, curr) => {
        const product = database.products.find((x) => x.id === curr.id);
        if (!product) return acc;

        acc += product.price * curr.amount;

        return acc;
      }, 0);
    },
    get tax() {
      return Math.round(this.subtotal * database.config.taxRate * 100) / 100;
    },
    get total() {
      return this.subtotal + this.tax;
    }
  }
};

const app = express();
app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => res.json(database.products).end());
app.get('/products/:id', (req, res) => {
  const product = database.products.find((x) => x.id === req.params.id);
  return product ? res.json(product).end() : res.status(404).end();
});

app.get('/cart', (req, res) => res.json(database.cart).end());
app.post('/cart', (req, res) => {
  if (!req.body) return res.status(400).end();

  const { id, amount = 1 } = req.body;
  if (!id) return res.status(400).end();

  const index = database.cart.items.findIndex((x) => x.id === id);
  if (index > -1) {
    database.cart.items[index].amount += amount;
  } else {
    database.cart.items.push(req.body);
  }

  res.json(database.cart).end();
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));
