const knex = require('../dbturing');

//1

let selectData  = ()=>{
    return knex.select('*').from("category")

}; 

//2

let selectby_id=(id)=>{
    return knex.select("*")
    .from('category')
    .where('category_id',id)
}; 

//3 

let select_product_id = (product_id)=>{
    return knex.select("category.category_id","department_id","name")
    .from('category').join('product_category', 'category.category_id', '=', 'product_category.category_id')
    .where('product_category.product_id',product_id)
};

//4

let get_data_by_department=(department_id)=>{
    // return knex("category").where('department_id',department_id)
    return knex.select().table('category').where('department_id',department_id)

};






module.exports={selectData,selectby_id,select_product_id,get_data_by_department}

