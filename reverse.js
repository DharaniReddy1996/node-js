const EventEmitter = require('events');
class Reversestr extends EventEmitter
{
    reverseStr(str){
        
        console.log(str)
       let reversed = "";      
        for (var i = str.length - 1; i >= 0; i--)
        {         
            reversed += str[i];  
        }
        this.emit('messageLogged');
        console.log("The reversed string is "+reversed)     
        
    }
}
module.exports=Reversestr;
