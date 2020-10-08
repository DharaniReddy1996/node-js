const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user1:RVjvj1Y4uCwOQETC@cluster0.zk97y.mongodb.net/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log('connected to Mongodb Atlas');
    
}).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})
