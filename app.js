const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const bookRoutes = require('./routes/book');
const {mongo} = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/book', bookRoutes);

mongoose.connect(
    'mongodb+srv://MonRoot:Secret1234@nodetest.016m1.mongodb.net/test'
).then(result => {
    app.listen(8080);
})

