const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const genreSchema = {
    name: String
}
const Genre = mongoose.model('genre', genreSchema);
const genre = new Genre();
router.post('/', async (req, res) => {
    genre.name = req.body.name.toString();
    let result = await genre.save();
    res.send(result);
});

module.exports = router;