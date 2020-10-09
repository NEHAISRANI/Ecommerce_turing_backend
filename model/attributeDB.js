const knex = require('../dbturing');

// 1
let selectData  = ()=>{
    return knex.select('*').from("attribute")

}; 

//2

let selectby_id=(id)=>{
    return knex.select("*")
    .from('attribute')
    .where('attribute_id',id)
};

//3

let get_attribute_id=(attribute_id)=>{
    return knex.select("attribute_value.attribute_value_id","value")
    .from("attribute_value").join("attribute","attribute.attribute_id","=","attribute_value.attribute_id")
    .where('attribute.attribute_id',attribute_id)
}

//4

let get_data_by_product_id=(product_id)=>{
    return knex.select("attribute_value.attribute_value_id","value","name")
    .from("attribute_value")
    .join("attribute","attribute.attribute_id","=","attribute_value.attribute_id")
    .join("product_attribute","attribute_value.attribute_value_id","=","product_attribute.attribute_value_id")
    .where("product_attribute.product_id",product_id)
} 

module.exports={selectData,selectby_id,get_attribute_id,get_data_by_product_id}


//extra query in another way in product_id

// return knex("attribute").select("attribute_value.attribute_value_id","name","value")
// .join("attribute_value","attribute.attribute_id",'=',"attribute_value.attribute_id")
//.join("product_attribute","attribute_value.attribute_value_id",'=', "product_attribute.attribute_value_id")
// .where("product_id",product_id)





















