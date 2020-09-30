// const fs = require('fs');
// fs.readdir('./',function (err,data){
//     if(err)
// {
//     console.log("error");
// }    
// else{
//     console.log(data);
// }
// });

const fs = require('fs');
// path doesnot match eo err will appear in output
// fs.readdir("./",(err,data)=>{  it wil give the list of all the files
// it uses arrow functions means it simply remove function name and put arrow symbol after parameters
fs.readdir('......../', (err,data)=> {
    if (err)
        console.log('error occurred');
    else
        console.log(data);

 

});
console.log("hi dharani")
