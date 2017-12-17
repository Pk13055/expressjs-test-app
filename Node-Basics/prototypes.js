/*
	What is Prototyping?
	You can basically add functionality to your classes or functions later through their prototype
	We added the functionality of uppercut or the magic attribute to the user later

*/

function User() {
	this.name = "";
	this.life = 100;
	this.giveLife = function(otherPlayer) {
		this.life--;
		otherPlayer.life++;
	}
}

var player1 = new User(), player2 = new User();
player1.name = "player 1";
player2.name = "player 2";
console.log(player1);

User.prototype.uppercut = function(otherPlayer) {
	console.log(this.name + " uppercutted " + otherPlayer.name);
	otherPlayer.life -= 3;
}

player1.uppercut(player2);
User.prototype.magic = 60;

console.log(player1);
console.log(player2);

module.exports = {
	player1 : player1,
	player2: player2,
	User : User
};