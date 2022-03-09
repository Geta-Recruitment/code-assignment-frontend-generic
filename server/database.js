const products = require('./assets/products.json');

const database = {
  config: {
    taxRate: 0.25
  },
  items: []
};

// create in-memory database
const cart = {
  get items() {
    return database.items.reduce((acc, { productId, amount }) => {
      const product = products.find((x) => x.id === productId);
      if (!product) return acc;

      acc.push({
        product,
        amount
      });

      return acc;
    }, []);
  },
  get totalItems() {
    return database.items.reduce((acc, curr) => (acc += curr.amount), 0);
  },
  get subtotal() {
    return database.items.reduce((acc, curr) => {
      const product = products.find((x) => x.id === curr.productId);
      if (!product) return acc;

      acc += product.price * curr.amount;

      return acc;
    }, 0);
  },
  get totalDiscount() {
    return database.items.reduce((acc, curr) => {
      const product = products.find((x) => x.id === curr.productId);
      if (!product) return acc;

      acc += product.discount * curr.amount;

      return acc;
    }, 0);
  },
  get tax() {
    return Math.round(this.total * database.config.taxRate * 100) / 100;
  },
  get total() {
    return this.subtotal - this.totalDiscount;
  }
};

const dbModule = (module.exports = database);
dbModule.cart = cart;
