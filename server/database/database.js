const mongoose = require('mongoose')
 
const config = require('../config');
 
const databaseConnection = () => {
    mongoose.connect(config.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connection stablished')
    })
    .catch((error) => {
        console.log('Error connection database: ', error)
    })
}
 
module.exports = databaseConnection;