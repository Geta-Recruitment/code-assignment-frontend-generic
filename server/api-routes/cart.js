const database = require('../database');
const products = require('../assets/products.json');

module.exports = {
  get: [
    function (req, res, next) {
      try {
        res.status(200).json(database.cart);
      } catch (e) {
        res.status(500).end();
      }
    }
  ],
  post: [
    function (req, res, next) {
      try {
        if (!req.body || !req.body.productId || !req.body.amount)
          return res
            .status(400)
            .json({ message: 'Request body missing' })
            .end();

        const { productId, amount = 1 } = req.body;
        if (!productId || products.findIndex((x) => x.id === productId) === -1)
          return res.status(400).json({ message: 'Product not found' }).end();

        const index = database.items.findIndex(
          (x) => x.productId === productId
        );
        if (index > -1) {
          database.items[index].amount += amount;
        } else {
          database.items.push({
            id: database.items.length,
            ...req.body
          });
        }

        res.status(200).json(database.cart);
      } catch (e) {
        console.error(e);
        res.status(500).end();
      }
    }
  ]
};
