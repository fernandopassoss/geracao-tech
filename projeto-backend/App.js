const express = require('express');
const app = express();
const sequelize = require('./src/config/db');


app.use(express.json());


sequelize.sync().then(() => {
    console.log('Database connected!');
    app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(error => console.error('Error connecting to the database:', error));
