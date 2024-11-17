
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
//next() allows to execute next function
app.use("/add-product",(req, res, next) => {
    console.log("in the sec middleware");
    res.send("<form action ='/product'method = 'POST'><input type ='text' name = 'title' ><button type='submit'>Add Product</button></form>");
}); 
app.use("/add-size",(req,res,next) => {
    res.send("<form action ='/size'method = 'POST'><input type ='number' name = 'size' ><button type='submit'>Add Size</button></form>");
})
app.post("/product",(req,res,next) => {
    console.log(req.body);
    res.redirect("/");
})
app.post("/size",(req,res,next) => {
    console.log(req.body);
    res.redirect("/")
})

app.use("/",(req, res, next) => {
    console.log("in the sec middleware");
    res.send("<h1>Hello from ExpressJS!</h1>");
});
app.listen(3000)
