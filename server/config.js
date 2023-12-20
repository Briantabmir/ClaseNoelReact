const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 5502,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://root:elibr1234!@cluster0.wpgr7kl.mongodb.net/game'
}

module.exports = config;