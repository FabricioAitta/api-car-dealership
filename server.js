require("dotenv").config();
require("./config");
const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit: '50mb'}))

app.use("/api", routes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send(err)
})

app.listen(PORT, () => {
    console.log(`server ready pal titubeo en puerto ${PORT}`)
})