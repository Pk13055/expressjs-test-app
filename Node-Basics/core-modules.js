/*
	This file contains all the core modules included by default with js

*/

// file module
var fs = require('fs');

fs.writeFileSync("example.txt", "Example data\n");
var exampletext = fs.readFileSync("example.txt");
console.log(exampletext.toString());

// path module
var path = require("path");

console.log(path.normalize("/root/home//dasdasd/index.html"));
console.log(path.basename("/root/home//dasdasd/index.html"));
console.log(path.dirname("/root/home//dasdasd/index.html"));