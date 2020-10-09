const express = require('express');
const products = express();
const productDb = require("../model/productDB")

//1

products.get("/product", (req,res) => {
    productDb.selectData()
    .then((response)=>{
        res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//2
products.get("/products/:search",(req,res)=>{
    var name=req.params.search
    productDb.search_product(name)
    .then((response)=>{
        res.json(response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

//3

products.get("/product/:productId", (req,res) => {
    var id=req.params.productId
    productDb.get_data_by_id(id)
    // console.log(data)
    .then((response)=>{
       res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//4
products.get("/products/inCategory/:category_id",(req,res)=>{
    category_id=req.params.category_id
    productDb.get_data_by_category_id(category_id)
    .then((response)=>{
       res.json({"rows":response})
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
})  

//5

products.get("/products/inDepartment/:department_id",(req,res)=>{
    department_id=req.params.department_id
    productDb.get_data_by_department_id(department_id)
    .then((response)=>{
        res.json({"rows":response})
    }).catch((err)=>{
        res.send(err)
    })
})

//6
products.get("/products/:product_id/details",(req,res)=>{
    product_id=req.params.product_id
    productDb.get_data_of_product(product_id)
    .then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.send(err)
    })
})

//7 

products.get("/products/:product_id/locations",(req,res)=>{
    product_id=req.params.product_id
    productDb.get_location_by_product_id(product_id)
    .then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.send(err)
    })
})

//8
products.post("/products/:product_id/reviews",(req,res)=>{
    var product_id=req.params.product_id
    var productreviews={
        customer_id:req.body.customer_id,
        product_id:product_id, 
        review:req.body.review, 
        rating:req.body.rating,
        created_on:new Date()
    }
    productDb.products_reviews(productreviews)
    .then((response)=>{
        res.send(response)
    }).catch((err)=>{
        res.send(err)
    })
}) 



//9

products.get("/products/:product_id/reviews",(req,res)=>{
    product_id=req.params.product_id
    productDb.get_reviews_by_product_id(product_id)
    .then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports=products 


