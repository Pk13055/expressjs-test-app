/*
	basics of modules and how to export functions from a given module
*/

var sharedVariable = "Test value";

module.exports = {
	sharedVariable: sharedVariable
};

// as you can see, this object is referenced and thus, is shared between various files. 
// To have multiple objects of the same prototype, we have to create an object factory:

sharedVariable = function() {
	return {
		notShared: ""
	};
}

module.exports = {
	sharedVariable: sharedVariable
};