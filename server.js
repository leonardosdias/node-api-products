const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://nodeapi:node@nodeapi-pfmrw.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('BD Conectado'))
    .catch(err => {
        console.log(`Erro de conexão do BD: ${err.message}`);
    });

requireDir("./src/models");

app.use("/api", require('./src/routes'));

app.listen(3001);