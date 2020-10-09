const express = require('express');
const departments = express();
const depDb = require("../model/departmentDB")

//1
departments.get("/department", (req,res) => {
    depDb.selectData()
    .then((response)=>{
       res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//2

departments.get("/department/:id",(req,res)=>{
   id=req.params.id 
   depDb.selectby_id(id)
   .then((response)=>{
      res.json(response)
   }).catch((err)=>{
      res.send(err)
   }) 
})



module.exports = departments
