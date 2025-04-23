const mongoose=require('mongoose');
const connection =mongoose.createConnection('mongodb://localhost:27017/CounterApp').on('open',()=>{
    console.log('Mongodb connected');
}).on('error',()=>{
    console.long('Mongodb connection error');
});
module.exports=connection;