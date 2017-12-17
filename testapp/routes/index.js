var express = require('express');
var router = express.Router();
var connection = require('../sql');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

data = [];

function getQuery(string) {
	
	connection.query('SELECT * from videos',
	 function (error, results, fields) {
		if (error) throw error;
		var result = [];
		for(var row in results)
			result.push(JSON.parse(JSON.stringify(results[row])));
		data = result;
	});
}

router.get('/mysql', function(req, res, next) {
	getQuery("SELECT * from videos");
	res.render('sql', {
		title: "mySQL Queries",
		data: data
	});
});

router.get('/name/:name([A-Z]{3}s|d)', function(req, res, next) {
	res.render('name', {
		title : "Special Home Page",
		name : req.params.name,
		age : 34
	});
});

router.get('/name/:name/', function(req, res, next) {
	res.render('name', {
		title : "User Page",
		name : req.params.name,
		age : 23
	});
});

module.exports = router;
