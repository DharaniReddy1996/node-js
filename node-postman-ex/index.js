const express = require('express')
const uuid = require('uuid-random');
const Joi = require('joi')
const app=express();
app.use(express.json());

let generes=[
    {id:uuid(),name:'action'},
    {id:uuid(),name:'thriller'},
    {id:uuid(),name:'romantic'}
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
// app.post('/api/generes', (req, res) => {
//     const genre={
//         id:generes.length+1,
//         name:req.body.name
//     };
//     generes.push(genre);
//     res.send(genre);
    
//     });

app.post('/api/generes', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: uuid(),
        name: req.body.name
    };
    generes.push(genre);
    res.send(genre);
});

app.put('/api/generes/:id', (req, res) => {
    const genre = generes.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log(genre.name);
    genre.name = req.body.name;
    console.log(genre.name);
    res.send(genre);
});

app.delete('/api/generes/:id', (req, res) => {
    const genre = generes.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        return res.status(404).send('The genre with the given ID was not found.');
    }
    const index=generes.indexOf(genre);
    generes.splice(index, 1);
    res.send(genre);


});


let port=process.env.POST || 3000;
app.listen(port,function(){
    console.log('server listening to port number',port);
})

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(genre, schema);
}

