const express = require('express');
const Joi = require('joi');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const genreSchema = {
    name: String
}
const Genre = mongoose.model('genre', genreSchema);

router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let genre = new Genre({ name: req.body.name });
    let result = await genre.save();
    res.send(result);
});

router.get('/',async (req, res) => {
    let result = await Genre.find();
    res.send(result);
})

router.put('/:id', async (req, res) => {
    const {error} = validateGenre(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name},{new:true});
    if ((!genre)) {
        return res.status(404).send('The genre with the given ID was not found.');
    }
    res.send(genre);
});


// router.put('/:id', async (req, res) => {
//     const {error} = validateGenre(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     const genre = await Genre.findOneAndUpdate({_id=req.params.id},{name:req.params.name},{new:true});
//         $set:{name:req.params.name}
// });
// if ((!genre)) {
//     return res.status(404).send('The genre with the given ID was not found.');
// }


router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove({_id: req.params.id});
    if (!genre) {
            return res.status(404).send('The genre with the given ID was not found.');
        }
    res.send(genre);
})

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(genre, schema);
}

module.exports = router;