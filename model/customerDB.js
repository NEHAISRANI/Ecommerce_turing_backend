const knex = require('../dbturing');
;
//1
let post_data   = (dataInsert)=>{
    console.log(post_data)
    return knex('customer').insert(dataInsert)

}; 

//2
let getData = ()=>{ 
    return knex('*').from('customer')
}

//3
let updateData=(updateCustomer,customer_id)=>{
    return knex("*").from('customer').update(updateCustomer).where("customer_id",customer_id)
} 

//4
let customerLogin=(customerEmail)=>{
    return knex.select('*').from('customer').havingIn('email',customerEmail)
}


//6
let updateAddress=(data,id)=>{
    return knex("*").from('customer').update(data).where("customer_id",id)

}

//7
let updateCreditcard=(data,id)=>{
    console.log(data,id)
    return knex("*").from('customer').update(data).where('customer_id',id)
} 

module.exports={post_data,getData,updateData,customerLogin,updateAddress,updateCreditcard} 
