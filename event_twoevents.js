
const EventEmitter = require('events');
const emitter=new EventEmitter();
emitter.on('addTwoNumbers', (firstNumber,secondNumber)=> {
    let result=firstNumber+secondNumber;
    console.log(`addition of ${firstNumber} and ${secondNumber} is ${result}`)
})
emitter.on('logMessage',(x,y)=>{
    console.log(x);
    console.log(y);
})

emitter.emit('addTwoNumbers',100,200);
emitter.emit('logMessage',{id:1,name:'John Doe'},{id:2,name:'Marry Public'})