/*
	The basics of async calls.
	The function placeOrder places orders to a restaurant cook that takes 
	5 seconds to cook an egg. When you run this application with Node, you can see that the cook process happens
	simultaneously and the timeouts happen together. This allows for a greater deal of multiprogramming
	and quicker response from the server.
*/


// place the order
function placeOrder(orderNumber) {
	console.log("Order " + String(orderNumber) + " placed");
	cookTheEgg(function() {
		console.log("Order " + String(orderNumber) + " being processed");
	});
}

// takes 5 seconds to process the task
function cookTheEgg(callback) {
	setTimeout(callback, 5000);
	console.log("Egg done");
}

// place random orders
for(var i = 1; i < 7; placeOrder(i++));

module.exports = {

};