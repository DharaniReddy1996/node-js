function returnsecondname(sname)
{
    // return "your last name is:" +sname;
    try {

        if (sname==(isNaN) && sname=="null")
            throw err1;
            
        return 'your first name is: '+sName;
        }
         catch(err){
            return 'Please enter the valid name';
                }
}

module.exports.secondname=returnsecondname;