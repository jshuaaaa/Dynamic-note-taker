const express = require('express');

// Import our modular routers for /tips and /feedback

const feedbackRouter = require('./feedback');

const app = express();


app.use('/notes', feedbackRouter);

module.exports = app;
