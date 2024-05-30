//может быть этот файл должен называться app.js ... 

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('./middlewares/cors')
const connectToDatabase = require('./database/connect')
const cookieParser = require("cookie-parser");

const pagesRouter = require('./routes/pages')
const apiRouter = require('./routes/apiRouter')

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public'))
)
app.listen(PORT, () => {
    console.log("app is listening!")
})