const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// permitir o envio de dados no formato de json
app.use(express.json());

// iniciando mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

// configurando rotas
app.use('/api', require('./src/routes'));


// porta
app.listen(3001);