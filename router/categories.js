const express = require('express');
const categories = express();
const categoryDb = require("../model/categoriesDB")

//1

categories.get("/categories", (req,res) => {
    categoryDb.selectData()
    .then((response)=>{
       res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//2

categories.get("/categories/:id", (req,res) => {
    id=req.params.id
    categoryDb.selectby_id(id)
    .then((response)=>{
       res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//3

categories.get("/categories/inProduct/:product_id",(req,res)=>{
    productId=req.params.product_id
    categoryDb.select_product_id(productId)
    .then((response)=>{
       res.send(response)
       console.log("done")
    }).catch((err)=>{
       res.send(err)
    })
})

//4

categories.get("/categories/inDepartment/:department_id",(req,res)=>{
   departmentId=req.params.department_id
   categoryDb.get_data_by_department(departmentId)
   .then((response)=>{
      res.send(response)
   }).catch((err)=>{
      res.send(err)
   })
}) 


module.exports=categories 



