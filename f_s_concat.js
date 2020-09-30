const returnfirstname=require("./firstname");
const returnsecondname=require("./secondname");
const returnfullname=require("./combinenames")

let firstnameresult=returnfirstname.firstname("john");
let secondnameresult=returnsecondname.secondname();
let fullnameresult=returnfullname.concatresul("john","deo");

console.log(firstnameresult);
console.log(secondnameresult);
console.log(fullnameresult)