const express = require('express');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('rodando na porta ' + port);
});