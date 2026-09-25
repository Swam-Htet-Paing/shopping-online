const Models = require('./Models');

const ProductDAO = {
  async selectByID(_id) {
    const product = await Models.Product.findById(_id).exec();
    return product;
  },

  async selectTopNew(top) {
    const query = {};
    const mysort = { cdate: -1 }; // Descending
    const products = await Models.Product.find(query).sort(mysort).limit(top).exec();
    return products;
  },

  async selectTopHot(top) {
    const items = await Models.Order.aggregate([
      { $match: { status: 'APPROVED' } },
      { $unwind: '$items' },
      { $group: { _id: '$items.product._id', sum: { $sum: '$items.quantity' } } },
      { $sort: { sum: -1 } }, // Descending
      { $limit: top }
    ]).exec();

    var products = [];
    for (const item of items) {
      const product = await ProductDAO.selectByID(item._id);
      if (product) {
        products.push(product);
      }
    }
    return products;
  },

  async selectByCatID(_cid) {
    const query = { 'category._id': _cid };
    const products = await Models.Product.find(query).exec();
    return products;
  },

  async selectByKeyword(keyword) {
    const query = { name: { $regex: new RegExp(keyword, 'i') } };
    const products = await Models.Product.find(query).exec();
    return products;
  }
};

module.exports = ProductDAO;