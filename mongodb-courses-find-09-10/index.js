const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {useNewUrlParser: true, useUnifiedTopology: true});


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

// find using publish and tags

// async function getCourses() {
//     return Course
//         .find({isPublished: true})
//         .and([{tags: 'backend'}])
//         .sort('-price')
//         .select('name author price tags isPublished');
// }


// find using proce and name and author

async function getCourses() {
    return Course
        .find({isPublished: true})
        .or([
            {price: {$gte: 15}},
            // {name: /.*by.*/i},
            {author:'/.M./'}
        ])
        .sort('-price')
        .select('name author price tags isPublished');
}


async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();