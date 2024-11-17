
const express = require("express");
const app = express();
app.use((req, res, next) => {
    console.log("in the middleware"); // next is a function
    next();           //allows to execute next function
});
app.use((req, res, next) => {
    console.log("in the sec middleware");
    res.send("<h1>Hello from Expressjs!</h1>");
});
app.listen(3000)