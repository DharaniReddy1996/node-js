const path = require('path');
let x=path.parse(__filename);
let z=path.parse(__dirname)
console.log(x);
console.log(z);
let y=path.dirname('/foo/bar/baz/asdf/quux');
console.log(y);