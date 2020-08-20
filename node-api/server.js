const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// inciando o app
const app = express();
app.use(express.json());
app.use(cors())

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
require('./src/models/Product');
//requireDir('./src/models')   - necessário instalar npm require-dir

// rotas
app.use('/api', require('./src/routes'));



app.listen(3001)