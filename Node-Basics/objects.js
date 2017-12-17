/*
	Objects and other Javascript stuff. 
	Objects in javascript are references. A new object will just point to an 
	"assigned" one, not create a copy. 
	In the example below, you can see changing the property of Boy changes 
	the underlying property of Person as well.
*/


var Person = {
	firstName : "Mr",
	lastName : "Person"
};

var Boy = Person;

console.log(Person.firstName + " " + Person.lastName);

Boy.firstName = "Master";
console.log(Person.firstName + " " + Person.lastName);
console.log(Boy.firstName + " " + Boy.lastName);

module.exports = {
	Boy: Boy,
	Person: Person
};