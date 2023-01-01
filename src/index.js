const express = require('express');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;


const homeRouter = require('./Router/homeRouter')

app.use(express.json());
app.use(homeRouter)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});