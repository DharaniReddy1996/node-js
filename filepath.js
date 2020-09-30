const path = require('path');
let x=path.parse(__filename);
console.log(x);
let y=path.dirname('/foo/bar/baz/asdf/quux');
console.log(y);