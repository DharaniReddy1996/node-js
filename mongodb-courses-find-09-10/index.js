const readline = require('readline');
const mongoose = require('mongoose');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// connect with db
mongoose.connect('mongodb://localhost/play-ground', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(function () {
}).catch(reason => {
    console.log('error connecting.');
});

//step-2
//create schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now()},
    isPublished: Boolean,
    price: Number
});


// const Course = mongoose.model('Course', courseSchema);
// course = new Course();
// let answers = [];
// let tempTags = [];
// let name = '';
// let author = '';
// let published = false;
// let price='';

// async function readData() {
//     rl.question('name? author? tags? published?price? ', answer => {
//         answers = answer.split(',');
//         console.log(answers);
//         name = answers[0];
//         author = answers[1];
//         tempTags= answers[2].split(' ');
//         published=answers[3]
//         price=answers[4];
//         course.set({name: name});
//         course.set({author: author});
//         course.set( {tags: tempTags});
//         course.set( {isPublished: published});
//         course.set({price: parseInt(price)});
//         course.save();
//         rl.close();
//     });

// }


// readData().then(function (){
//     console.log('successfully done');
// }).catch(reason => {
//     console.log('failed',reason.message);
// });



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