const express=require('express');

const PORT=8000;
const app=express();

//route

app.get('/sayHello',(req,res)=>{
    res.json({message:'Hello User'});
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})