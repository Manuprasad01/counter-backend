const app=require('./app');
const port=3000;

app.get('/',(req,res)=>{
    res.send('I am the root route....::::');
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});