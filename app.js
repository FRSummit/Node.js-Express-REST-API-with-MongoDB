const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv');

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on post');
});

//Connect to DB
mongoose.connect(
    'mongodb+srv://FRSummit:<786648>@restapi-frs-fik92.mongodb.net/test?retryWrites=true&w=majority', 
    { useNewUrlParser: true }, 
    () => console.log('Connect to DB!')
);

//How to we start listening to the server
app.listen(3000);