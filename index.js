
// import { express } from 'express';
const express = require('express');
const exp = express();

const port = 9999;

// to run this app - 
// npm start 
// view the output on browser at 
// http://localhost:9999/
// to stop - 
// Ctrl + C
// Y 

// exp.get(arg1, arg2);
// exp.get('/', () => {});

exp.get('/', (request, response) => {
    response.send(`Welcome to SFDC app at ${port}`);
    console.log(`Welcome!`);
});

exp.get('/home', (request, response) => {
    response.send(`Home page of SFDC app at ${port}`);
    console.log(`home`);
});

exp.get('/company', (request, response) => {
    response.send(`Company page of SFDC app at ${port}`);
    console.log(`company`);
});


// exp.listen(arg1, arg2);
// exp.listen(port, () => {});

exp.listen(port, () => {
    console.log(`My app is running at ${port}.`)
});

