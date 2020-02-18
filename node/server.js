const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

// testar mongodb
const Product = mongoose.model('Product');



// primeira rota
app.get('/', (req, res) => {
  Product.create({
    title: 'React',
    description: 'Build native',
    url: 'http://github.com/facebook/react-native'
  });
  return  res.send('helo');
});


// porta
app.listen(3001);