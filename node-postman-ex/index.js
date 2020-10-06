const express = require('express')
const app=express();
app.use(express.json());

let generes=[
    {id:1,name:'action'},
    {id:2,name:'thriller'},
    {id:3,name:'romantic'}
]

// retriving all the array
app.get('/api/generes',(req,res)=>{
    res.send(generes);
});

//path variable(:id) find with id
app.get('/api/generes/:id', (req, res) => {
    let id=parseInt(req.params.id);
    const genre = generes.find(c => c.id === id);
    if (!genre)
        return res.status(404).send(`The genre with the ID ${id} was not found.`);
       res.send(genre);
})

// find using name
app.get('/api/generes/:name', (req, res) => {
    let name=req.params.name;
    const genre = generes.find(c => c.name === name);

    if (!genre)
        return res.status(404).send(`The genre with the NAME ${name} was not found.`);
       res.send(genre);
})

// post the new id and names using post method
app.post('/api/generes', (req, res) => {
    const genre={
        id:generes.length+1,
        name:req.body.name
    };
    generes.push(genre);
    res.send(genre);
    
    });

let port=process.env.POST || 3000;
app.listen(port,function(){
    console.log('server listening to port number',port);
})

