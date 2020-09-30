function returnsecondname(sname)
{
    try {

        if (!isNaN(sname))
            throw err;
        return 'your first name is: '+sname;
        } catch(err){
            return'Please do not put numbers';
                }
            }
module.exports.secondname=returnsecondname;