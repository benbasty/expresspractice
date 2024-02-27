const express = require('express');
const app = express()
const port = 8880;

app.listen(port, () => {
    console.log(`Listening at https://localhost:${port}`);
})

app.get('/', (req,res) => {
    console.log('home page');
    res.send('<h1>Welcome to my new page</h1>');
})

app.get('/cats', (req,res) => {
    console.log('cats');
    res.send('<h1>For your cats</h1>');
})

app.get('/dogs', (req,res) => {
    console.log('dogs');
    res.send('<h1>For your dogs</h1>');
})

app.get('*', (req,res) => {
    console.log('any other routes');
    res.send('<h1>Try again</h1>');
})