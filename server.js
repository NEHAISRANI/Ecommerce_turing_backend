const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); 

const department=require("./router/department")
app.use(department) 

const categories=require("./router/categories")
app.use(categories) 

const attributes=require("./router/attribute")
app.use(attributes)

const product=require("./router/product")
app.use(product)

const customer=require("./router/customer")
app.use(customer)

// const orders=require("./router/orders")
// app.use(orders)

const server = app.listen(3600, function(){     
  console.log("listening on port %s...", server.address().port);
});  


