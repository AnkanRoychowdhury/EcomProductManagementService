const express = require("express");
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/api/index')
const cors = require('cors');

const { PORT } = require("./config/serverConfig");
const { sequelize } = require("./models");

const app = express();

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors())

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

setupAndStartServer();