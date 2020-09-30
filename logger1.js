function log(message){
    console.log("logger1 message, i am with in the log function of my logger1 module and my message to you is:" +message);
}

module.exports.log=log;