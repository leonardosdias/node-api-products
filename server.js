const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//mongoose.connect('mongodb+srv://leonardo:leo123456@nodeapi-pfmrw.mongodb.net/test?retryWrites=true&w=majority',
mongoose.connect('mongodb://leonardo:leo123456@nodeapi-shard-00-00-pfmrw.mongodb.net:27017,nodeapi-shard-00-01-pfmrw.mongodb.net:27017,nodeapi-shard-00-02-pfmrw.mongodb.net:27017/test?ssl=true&replicaSet=nodeapi-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Banco de Dados Conectado'))
    .catch(err => {
        console.log(`Erro de conexão do Banco de Dados: ${err.message}`);
    });



requireDir("./src/models");

app.use("/api", require('./src/routes'));

app.listen(3001);
