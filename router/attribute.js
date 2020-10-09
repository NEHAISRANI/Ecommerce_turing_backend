const express = require('express');
const attribute = express();
const attributeDb = require("../model/attributeDB")

//1

attribute.get("/attributes", (req,res) => {
    attributeDb.selectData()
    .then((response)=>{
       res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//2

attribute.get("/attributes/:attribute_id",(req,res)=>{
    id=req.params.attribute_id
    attributeDb.get_attribute_id(id)
    .then((response)=>{
        res.send(response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

//3
attribute.get("/attributes/values/:attribute_id",(req,res)=>{
    id=req.params.attribute_id
    attributeDb.get_data_by_product_id(id)
    .then((response)=>{
        res.send(response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })

})

4
attribute.get("/attributes/inProduct/:product_id",(req,res)=>{
    id=req.params.product_id
    attributeDb.get_data_by_product_id(id)
    .then((response)=>{
        res.send(response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})
module.exports=attribute 
