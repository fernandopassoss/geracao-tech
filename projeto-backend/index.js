const express = require('express');
const app = express();
const port = 3000;

app.get('/', (require, response) => response.send('Olá mundo'));
app.listen(port, ()=>console.log('servidor rodando na porta 3000'));
