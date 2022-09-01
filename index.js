const express = require ("express");
const userRouter = require ("./routes/users.route");
const productRouter = require ("./routes/products.route")

const app = express();



app.use("/users", userRouter);
app.use("/products", productRouter);
//MVC Pattern
//Model: for defining user structure
//View : 
//Controller : 1 models
                // 
                // route



app.listen(4000, (err) => {
    console.log("server s running on http://localstorage:4000")
    });
