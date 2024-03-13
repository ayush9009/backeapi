const express=require('express');

const PORT=80;
const app=express();

//rout

app.get('/sayHello',(req,res)=>{
    res.json({message:'Hello User'});
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})
