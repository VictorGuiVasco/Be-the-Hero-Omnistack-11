const express = require('express');
const cors = require("cors"); //Rodando com Postwoman
const routes = require('./routes');

const app = express();

app.use(cors()); //Rodando com PostWoman
app.use(express.json());
app.use(routes);

app.listen(3333);
