const express = require('express')
const Joi = require('joi')
const app=express();
app.use(express.json());

let movies=[
    {id:1,name:'Nishabdam',rating:4},
    {id:2,name:'Bishma',rating:5},
    {id:3,name:'Bhahubali',rating:2}
]

// retriving all the array
app.get('/api/movies',(req,res)=>{
    res.send(movies);
});

// find using id
app.get('/api/movies/:id', (req, res) => {
        let id=parseInt(req.params.id);
        const movie = movies.find(c => c.id === id);
        if (!movie)
            return res.status(404).send(`The genre with the ID ${id} was not found.`);
           res.send(movie);
    })

    // find using names
    app.get('/api/movies1/:name', (req, res) => {
        let name=req.params.name;
        const movie = movies.find(c => c.name === name);
        if (!movie)
            return res.status(404).send(`The movie with the Name ${name} was not found.`);
           res.send(movie);
    })
    

    // find using rating
    app.get('/api/movies2/:rating', (req, res) => {
        let rating=req.params.rating;
        const movie = movies.filter(c => c.rating >= rating);
        if (!movie)
            return res.status(404).send(`The movies with the rating ${rating} was not found.`);
           res.send(movie);
    })

    app.post('/api/movies', (req, res) => {
        const { error } = validateMovie(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    const movie={
        id:movies.length+1,
        name:req.body.name,
        rating:req.body.rating
    };
    movies.push(movie);
    res.send(movies);
    });

    app.put('/api/movies/:id',(req,res) => {
        let id=parseInt(req.params.id);
        const movie = movies.find(c=> c.id == id);
    
        if(!movie)
            return res.status(404).send(`The movie with the id ${id} was not found.`);
    
        const { error } = validateMovie(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    
        movie.name = req.body.name;
        movie.rating = req.body.rating;
        res.send(movie);
    })


let port=process.env.POST || 3000;
app.listen(port,function(){
    console.log('server listening to port number',port);
})

function validateMovie(movie) {

    const schema = {
        name: Joi.string().min(5).required(),
        rating: Joi.number().min(1).max(5).required(),
    };
    return Joi.validate(movie, schema);
} 

