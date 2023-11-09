const express = require("express");
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/api/index')

const { PORT } = require("./config/serverConfig");
const {ProductImage, Product} = require("./models/index");

const app = express();

let info = {
    name: "samsung-galaxy-a31.webp",
    caption: "SAMSUNG Galaxy A31",
    ProductId: 1
}

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

setupAndStartServer();