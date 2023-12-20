const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

//imports config
const config = require('./config');
const databaseConnection = require('./database/database')

const authRoutes = require('./routes/authRoutes')

const app = express();
app.use(cors({
    origin: true
}))

app.use(bodyparser.json());
app.use('/', authRoutes);

app.listen(config.PORT, () => {
    console.log(`Server is running at port: ${config.PORT}`);
    databaseConnection();
})