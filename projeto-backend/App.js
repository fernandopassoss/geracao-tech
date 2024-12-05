const express = require('express');
const app = express();
const sequelize = require('./config/db');
const usuarioRoute = require('./routes/usuarioRoute');

app.use(express.json());

app.use('/v1/user', usuarioRoute);

sequelize.sync().then(() => {
    console.log('Database connected!');
    app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(error => console.error('Error connecting to the database:', error));
