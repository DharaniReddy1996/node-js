// const products = [];

// module.exports= class Product{
//     constructor(t) {
//         this.title=t;

//     }

//     save()
//     {
//         products.push(this)
//     }
//     static fetchAll()
//     {
//         return products;
//     }
// }


const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t,c,d,i) {
    this.title = t;
    this.price = c;
    this.desc= d;
    this.image=i;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};