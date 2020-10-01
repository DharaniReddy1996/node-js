// const eventemitter = require('events');



const EventEmitter = require('events');
const Reversestr=require('./reverse');
const reverser = new Reversestr();

reverser.addListener('messageLogged',()=>{
    console.log('event handled');
});

reverser.reverseStr("dharani");

console.log("end");