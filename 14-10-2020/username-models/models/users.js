// const users = [];

// module.exports= class User{
//     constructor(t) {
//         this.title=t;

//     }

//     save()
//     {
//         users.push(this)
//     }
//     static fetchAll()
//     {
//         return users;
//     }
// }



const fs = require('fs');
const path = require('path');

module.exports = class User {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'users.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let users = [];
      if (!err) {
        users = JSON.parse(fileContent);
      }
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'users.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
