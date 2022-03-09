const products = require('../assets/products.json');

module.exports = {
  get: [
    function (req, res, next) {
      try {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 10);

        const start = Math.max(0, page - 1) * limit;
        const end = start + limit;

        const response = {
          items: products.slice(start, end),
          page,
          limit,
          totalPages: Math.ceil(products.length / limit),
          totalItems: products.length
        };

        res.status(200).json(response);
      } catch {
        res.status(500).end();
      }
    }
  ]
};
