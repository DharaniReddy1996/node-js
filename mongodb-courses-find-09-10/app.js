const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected successfully');
});
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('Course', courseSchema);

// async function updateCourse(id)
// {

//     const course = await Course.findById(id);
//     console.log(course);
//     if (!course) return;

      // if set not work then use course.name stsmt
    // course.set({ name: 'Learning React',author: 'Mosh',_v: 2});
  

    // course.name='Spring', course.author='Jane';

//     course.save();
//     console.log(course);


// }

// updateCourse('5f7ff25c5684cb13e84df606').then(()=>{
//     console.log('course update success');
// });

// update many will update all with the name mosh 
// if we use update it will update only one 
async function updateCourse()
{
    // const result = await Course.updateMany({ author: 'Mosh' }, {

        const result = await Course.update({ author: 'Mosh' }, {

        $set: { name: 'Learning hockey'}


});
    console.log('course update success');
}

updateCourse().then(() =>{
    console.log('success');
} );