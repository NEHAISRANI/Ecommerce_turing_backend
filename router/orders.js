const express = require('express');
const orders = express();
const ordersDb = require("../model/orderdsDB")
var jwt = require('jsonwebtoken');
const Knex= require('knex');

//1

orders.post('/orders/:card_id', (req,res) => {
    let cartId=req.params.card_id
    var data=ordersDb.joinData(cartId) 
    data.then((response)=>{ 
        total_amount=response[0]["quantity"]*response[0]["price"] 
        Data={
            total_amount:total_amount,
            created_on:new Date(),
            shipped_on:new Date(),
            status:req.body.status,
            comments:req.body.comments,
            customer_id:req.body.customer_id,
            shipping_id:req.body.shipping_id,
            tax_id:req.body.tax_id,
            auth_code:req.body.auth_code,
            reference:req.body.reference
        } 
        data=ordersDb.insertData(Data)
        .then((response)=>{
            let token = req.headers.cookie
            let token1 = token.split("=") 
            jwt.verify(token1[0],"my_secreat_key",function(err,data){
                if(!err){
                    let data1=ordersDb.extractData()
                    data1.then((response)=>{
                        res.send(response)
                    }).catch((err)=>{ 
                        res.send(err)
                    })
                }else{
                    res.send("check user once")
                }
            });
        }).catch((err)=>{
            res.send(err) 
        })  
    })  
}); 


//2

orders.get('/orders/:order_id', (req,res) => {
    let order_id=req.params.order_id;
    let response=getOrders.getData(order_id)

})


module.exports=orders 

