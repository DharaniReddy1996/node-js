function returnfirstname(fname)
{
    try {

        if (!isNaN(fname))
            throw err;
        return 'your first name is: '+fname;
        } catch(err){
            return'Please do not put numbers';
                }
            }
module.exports.firstname=returnfirstname;