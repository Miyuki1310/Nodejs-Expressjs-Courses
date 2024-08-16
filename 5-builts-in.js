//Assert

var assert = require("assert");
var x = { a: { n: 0 } };
var z = { a: { n: 0 } };
assert.deepEqual(x, z, "My message goes here");

//Buffer

// var buf = Buffer.alloc(15);
// var buf2 = Buffer.allocUnsafe(15);
// console.log(buf2);

//HTTP
// var http = require("http");
// console.log(http.get);