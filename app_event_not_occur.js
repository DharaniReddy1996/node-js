
const EventEmitter = require('events');
const emitter=new EventEmitter();

const logger=require('./event_not_occur');

// logger.logger('hello world');
emitter.on('messageLogged',()=>{
    // console.log('hi');
    // if we write out side emitter.on it will work because we cant recive emitter from one module to another
    logger.logger('hello world');
});
console.log('event executed successfully');


    