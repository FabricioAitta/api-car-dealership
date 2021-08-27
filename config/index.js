// CONFIG
require("dotenv").config();
const mongoose = require("mongoose");

const { DB_NAME, DB_PASSWORD } = process.env;

//MONGO ATLAS DATA BASE
mongoose
    .connect(
        `mongodb+srv://car-dealership:${DB_PASSWORD}@car-dealership.40kxc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }
    )
    .then(() => console.log("DB CONNECT!!"))
    .catch((e) => console.log("DB NO CONNECT ERROR", e));

module.exports = mongoose;