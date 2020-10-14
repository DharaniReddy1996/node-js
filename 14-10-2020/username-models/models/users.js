const users = [];

module.exports= class User{
    constructor(t) {
        this.title=t;

    }

    save()
    {
        users.push(this)
    }
    static fetchAll()
    {
        return users;
    }
}
