const knex = require('../dbturing');

//1
let joinData=(cart_id)=>{
    return knex.select('shopping_cart.quantity','product.price')
    .from('shopping_cart').join('product','shopping_cart.product_id','=','product.product_id')
    .where('cart_id',cart_id)
};

let insertData=(dataInserted)=>{
    return knex('orders').insert(dataInserted)
}

let extractData=()=>{
    return knex.select('shipping_id','tax_id','shopping_cart.cart_id')
    .from('orders').join('shopping_cart','orders.order_id','=','shopping_cart.item_id')
}

//2


module.exports={joinData,insertData,extractData}
