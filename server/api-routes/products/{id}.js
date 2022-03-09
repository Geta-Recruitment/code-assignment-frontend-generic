const products = require('../../assets/products.json');

module.exports = {
  get: [
    function (req, res, next) {
      try {
        const { id } = req.params;
        const product = products.find((x) => x.id === id);
        if (!product) {
          res.status(404).end();
        } else {
          res.status(200).json(product);
        }
      } catch (e) {
        res.status(500).end();
      }
    }
  ]
};
