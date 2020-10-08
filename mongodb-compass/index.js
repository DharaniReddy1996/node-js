const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground',{ useNewUrlParser: true , useUnifiedTopology: true} )
.then(function(){
    console.log('Connected to Mongo');
})
.catch(reason => {
    console.log('Connection is not Unsuccessful..!',reason.message);
})

const studentSchema=new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        doj:{type: Date,default:Date.now()}
    });

const Student=mongoose.model('Student',studentSchema);

// for creating the student database use following steps..... and student.save

// let student=new Student({
//     firstName: 'dharani',
//     lastName: 'reddy',
//     email: 'dharanirdy@email.com'
// });
// async function createStudent()
// {
//     let result = await student.save();

//     console.log(result);
// }

// createStudent().then(function (){
//     console.log('Student created: ');

// }).catch(error => {
//     console.log('Error creating student:',error.message);
// });


// to retrive the total students list in database use getstudent() and student.find

async function getStudents()
{
    let result = await Student.find();
    console.log('displaying students',result);
    console.log('called getStudents()');
}

async function run()
{
    getStudents().then(function(){
        console.log('called run function');
    }).catch(error => {
        console.log(error.message);
    })
}
run().then(function () {
    console.log('finished running');

}).catch(error => {
    console.log(error.message);

});

