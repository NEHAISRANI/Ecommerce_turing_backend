const knex = require('../dbturing');

//1
var selectData  = ()=>{
    return knex.select('*').from("department")
    console.log(selectData)

};

//2

var selectby_id=(id)=>{
    return knex.select("*")
    .from('department')
    .where('department_id',id)
};

module.exports={selectData,selectby_id}  