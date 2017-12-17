var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
	res.render("about", {
		title: "About",
		name: "Base Page"
	});
});

router.get('/:name([A-Z]{3}\\d+)', function(req, res, next) {
	res.render('about', {
		title: "About Page",
		name: req.params.name
	});
});

module.exports = router;