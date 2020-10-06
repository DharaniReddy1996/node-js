const express = require('express')
const app=express();
app.use(express.json());

let generes=[
    {id:1,name:'action'},
    {id:2,name:'thriller'},
    {id:3,name:'romantic'}
]

app.get('/api/generes',(req,res)=>{
    res.send(generes);
});

let port=process.env.POST || 3000;
app.listen(port,function(){
    console.log('server listening to port number',port);
})

