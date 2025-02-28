const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const uploadRoute = require('./src/api/upload');

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api/upload', uploadRoute);

app.listen(5000, () => {
  console.log('Backend rodando na porta 5000');
});