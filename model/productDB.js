const knex = require('../dbturing');
//1

let selectData  = ()=>{
    return knex.select('*').from("product")

}; 

//2

let search_product = (search)=>{
    return knex('product').where('name', 'like', '%'+search+'%')

};

//3

let get_data_by_id=(productId)=>{
    return knex.select("*")
    .from('product')
    .where('product_id',productId)

};

//4

let get_data_by_category_id=(categoryId)=>{
    return knex.select("*")
    .from('product')
    .join('product_category','product_category.product_id', '=', 'product.product_id')
    .where('category_id',categoryId)
};

//5

let get_data_by_department_id=(department_id)=>{
    return knex.select("product.product_id","product.name","product.description","product.price",
    "product.discounted_price","product.thumbnail")
    .from('product')
    .join('department','department.department_id','product.product_id')
    .where("department_id",department_id)
};

//6

let get_data_of_product=(product_id)=>{
        
    return knex.select("product.product_id","name","description","price","discounted_price","image","image_2")
    .from("product")
    .where("product_id",product_id)
};

//7
let get_location_by_product_id=(product_id)=>{
    return knex.select("category.category_id","category.name as category_name","department.department_id","department.name as department_name")
    .from("category")
    .join('department','department.department_id','=','category.department_id')
    .join("product_category","product_category.product_id","=","category.category_id")
    .where("product_id",product_id)
} 

//8
let products_reviews=(productDetails)=>{
    return knex("review").insert(productDetails)

}



//9 

let get_reviews_by_product_id=(product_id)=>{
    return knex.select("product.name","review.rating","review","created_on")
    .from("product")
    .join('review','product.product_id','=','review.product_id')
    .where("product.product_id",product_id)
    
    // without id
    // return knex.select('product.name','review','rating','created_on').from('product').innerJoin('review').where('product.product_id',product_id)

}

module.exports={selectData,search_product,get_data_by_id,get_data_by_category_id,get_data_by_department_id,get_data_of_product,get_location_by_product_id,products_reviews,get_reviews_by_product_id}
