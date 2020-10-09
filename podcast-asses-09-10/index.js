const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground',{ useNewUrlParser: true , useUnifiedTopology: true} )
.then(function(){
    console.log('Connected to Mongo');
})
.catch(reason => {
    console.log('Connection is not Unsuccessful..!',reason.message);
})

const podcastSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        status:String,
        group:[String]
    }
    );

const Podcast=mongoose.model('Podcast',podcastSchema);

// for creating the pocast database use following steps..... and podcast.save

let podcast=new Podcast({
    name: 'ishu',
    age: 10,
    status: 'not-allowed',
    group:['kid','home']
});
async function createPodcast()
{
    let result = await podcast.save();

    console.log(result);
}

createPodcast().then(function (){
    console.log('podcast created: ');

}).catch(error => {
    console.log('Error creating podcast:',error.message);
});


// to retrive the total podcast list in database use getstudent() and student.find

async function getPodcast()
{
    let result = await Podcast.find();
    console.log('displaying podcast',result);
    console.log('called getPodcast()');
}

async function run()
{
    getPodcast().then(function(){
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


// finding student with id

async function findPodcastByID(id)
{
    await Podcast.findById(id).then(function (result) {
        console.log('podcast found:',result);

    }).catch(error => {
        console.log('Error finding podcast with ID: ',id);
    });
}

findPodcastByID('5f80317212bda72f24981214').then(()=>{
    console.log('finished finding podcast')

}).catch(reason => {
    console.log('Error with finding podcast')
});

// find bt first name

async function findPodcastByNAME(name)
{
    let result = await Podcast.find({name: name})
    .select("name status")
        console.log('podcast found:',result);

}

findPodcastByNAME('ishu').then(()=>{
    console.log('finished finding podcast')

}).catch(reason => {
    console.log('Error with finding Podcast')
}); 

// find using status

async function findPodcastByStatus(status)
{
    let result = await Podcast.find({status: status})
    .select("name status")
        console.log('podcast found:',result);

}

findPodcastByStatus('allowed').then(()=>{
    console.log('finished finding podcast')

}).catch(reason => {
    console.log('Error with finding Podcast')
}); 

// find using age

async function findPodcastByAge()
{
    let result = await Podcast.find({age: {$gte: 20}})
    .select("name status,age")
        console.log('podcast found:',result);

}

findPodcastByAge().then(()=>{
    console.log('finished finding podcast')

}).catch(reason => {
    console.log('Error with finding Podcast')
}); 


// update by id

async function updateCourse(id)
{

    const course = await Podcast.findById(id);
    console.log(podcast);
    if (!podcast) return;
    //   if set not work then use course.name stsmt
    podcast.set({ name: 'dhushyanthala'});
    // course.name='Spring', course.author='Jane';

    podcast.save();
    console.log(podcast);
}

updateCourse('5f802f0e1ddd4a1e6823db7d').then(()=>{
    console.log('podcast update success');
});

// update many will update all with the name mosh 
// if we use update it will update only one 

async function updateCourse()
{
    const result = await Podcast.updateMany({ name: 'mythily' }, {
        // const result = await Course.update({ author: 'Mosh' }, {
        $set: { age: '30'}
});
    console.log('podcast update success');
}

updateCourse().then(() =>{
    console.log('success');
} );


// find using findbyidandupdate


async function updateCourse(id)
{
    let podcast = await Podcast.findByIdAndUpdate({_id: id}, {
       $set: {name: 'ishwarya', age:24}
    },{new:true});
    console.log(podcast);
}

updateCourse('5f80324bf460713854b226f8').then(() => {
    console.log('success');
});

// remove using deleteone and deletemany

async function removeCourse()
{
const result = await Podcast.deleteMany({name:'mythily'});
    console.log(result);
}
removeCourse().then(() =>{
    console.log('success');
} );


 
 