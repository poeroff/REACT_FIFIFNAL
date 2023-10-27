const express = require("express");

const app = express();

const bodyparser = require("body-parser");

const cors = require('cors');
app.use(cors());



const mainpageRoutes = require("./router/mainpage");


app.use(mainpageRoutes)


app.listen(5000);





