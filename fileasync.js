const fs = require('fs');
let file_detailsSync=fs.readdirSync('./');
console.log(file_detailsSync);
// for async we should use call back function and we should define a parameter
let file_detailsAsync=fs.readdir('./',function (){
    console.log('within call back');
});
console.log(file_detailsAsync);
