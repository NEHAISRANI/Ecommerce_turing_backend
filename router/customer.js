const express = require('express');
const customers = express();
const customerDb = require("../model/customerDB")
var jwt = require('jsonwebtoken');
const Knex= require('knex');



//1

customers.post('/customer', (req,res) => {
    customerDetails=req.body 
    console.log(customerDetails)
    customerDb.post_data(customerDetails)
    .then((response)=>{  
        res.json(response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//2
customers.get('/customers', (req,res) => {
    customerDb.getData()
    .then((response)=>{
        res.json(response) 
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

//3
customers.put('/customers/:customer_id',(req,res)=>{
    let customer_id=req.params.customer_id;
    let updateCustomerDetails={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        day_phone:req.body.day_phone,
        eve_phone:req.body.eve_phone,
        mob_phone:req.body.mob_phone
    }
    customerDb.updateData(updateCustomerDetails,customer_id)
    .then(()=>{
        res.send("update")
    }).catch((err)=>{
        res.send(err)
    })
})

//4 
customers.post('/customers/login',(req,res)=>{
    let email=req.body.email.trim()
    let password=req.body.password
    let data=customerDb.customerLogin(email)
    .then((data)=>{
        if(data.length==0){
            res.send("wrong email")
        } 
        else{
            if(data[0]["password"] == password){
                email=data[0].email
                customer_id=data[0].customer_id 
                let token = jwt.sign({customer_id,email},"my_secreat_key")
                res.cookie(token)
                console.log(token)
                res.json("login sucessfully")
            } 
            else{ 
              res.send("wrong  password")
            }  
        }
    }).catch((err)=>{  
        res.send(err)   
    })
}) 

//6

customers.put('/customers/address/:customerid',(req,res)=>{
    let customerid=req.params.customerid
    // console.log(customerid)
    let token = req.headers.cookie
    let token1 = token.split("=")
    jwt.verify(token1[0],"my_secreat_key",function(err,data){
        if(!err){ 
            let addressData={
                address_1:req.body.address_1,
                address_2:req.body.address_2
            } 
            data1=customerDb.updateAddress(addressData,customerid)
            data1.then(()=>{ 
                res.send("updated") 
            }).catch((err)=>{ 
                res.send(err) 
            }) 
        }else{ 
            res.send("check user once")
        }
    }); 
})

//7
customers.put('/customers/creditCard/:customer_id',(req,res)=>{
    let customerid=req.params.customer_id
    let token = req.headers.cookie
    let token1 = token.split("=") 
    jwt.verify(token1[0],"my_secreat_key",function(err,data){
        if(!err){
            let credit_cardData={
                credit_card:req.body.credit_card
            } 
            data1=customerDb.updateCreditcard(credit_cardData,customerid)
            data1.then(()=>{
                res.send("updated") 
            }).catch((err)=>{ 
                res.send(err)
            })

        }else{
            res.send("check user once")
        }
    });



})


module.exports=customers 



