const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
   /* const produ = await Product.create({
      title: 'React',
      description: 'Build',
      url: 'teste.com.br'
      });*/

    const products = await Product.find();

    return res.json(products);
  }
};