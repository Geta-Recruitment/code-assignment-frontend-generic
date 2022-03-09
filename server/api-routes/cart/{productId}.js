const database = require('../../database');

module.exports = {
  get: [
    function (req, res, next) {
      try {
        const { productId } = req.params;
        if (!productId)
          return res.status(400).json({ message: 'productId missing' }).end();

        const cartItem = database.items.find((x) => x.productId === productId);
        if (!cartItem)
          return res
            .status(404)
            .json({ message: 'Item does not exist in cart' })
            .end();

        res.status(200).json(cartItem);
      } catch (e) {
        res.status(500).end();
      }
    }
  ],
  put: [
    function (req, res, next) {
      try {
        const { productId } = req.params;
        if (!productId)
          return res.status(400).json({ message: 'productId missing' }).end();

        if (!req.body || !req.body.productId)
          return res
            .status(400)
            .json({ message: 'Request body missing' })
            .end();

        const index = database.items.findIndex(
          (x) => x.productId === productId
        );
        if (index === -1)
          return res
            .status(404)
            .json({ message: 'Item does not exist in cart' })
            .end();

        if (req.body.amount === 0) {
          database.items.splice(index, 1);
        } else {
          database.items.splice(index, 1, req.body);
        }

        res.status(200).json(database.cart);
      } catch (e) {
        res.status(500).end();
      }
    }
  ],
  delete: [
    function (req, res, next) {
      try {
        const { productId } = req.params;
        if (!productId)
          return res.status(400).json({ message: 'productId missing' }).end();

        const index = database.items.findIndex(
          (x) => x.productId === productId
        );
        if (index === -1)
          return res
            .status(404)
            .json({ message: 'Item does not exist in cart' })
            .end();

        database.items.splice(index, 1);

        res.status(200).json(database.cart);
      } catch (e) {
        res.status(500).end();
      }
    }
  ]
};
