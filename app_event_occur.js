// const EventEmitter = require('events');
const Logger=require('./event_occur');
const logger=new Logger();
logger.log('calling log method from logger module');
logger.log1('calling log1 method from logger module');
logger.addListener('messageLogged',()=>{
    console.log('Handled messageLogged Event');
});
logger.log1('=======END=======');
logger.addListener('messageLogged',()=>
{
   console.log('Handled messageLogged1 Event');
});
logger.log('=======END=======');
logger.log1('=======END=======');

// by using inherit we can handel the other module register events
