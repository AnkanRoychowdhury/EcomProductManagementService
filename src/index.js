const express = require("express");
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/api/index')

const { PORT } = require("./config/serverConfig");

const app = express();

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

setupAndStartServer();