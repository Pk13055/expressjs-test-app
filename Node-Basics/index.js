/*
	main file that contains all the exports
	while importing, you don't include the extensions of the files.
	import is done with the "require" keyword
*/

// async
var async = require("./async");

// objects 
var objects = require("./objects");

// function and class prototypes
var proto = require("./prototypes");

var shared = require("./modules");

// this creates an object from the object factory that we made earlier 
shared = new shared.sharedVariable();
shared.notShared = "Test Value";
console.log(shared);