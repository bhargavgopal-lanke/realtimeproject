const express = require('express');

const router = express.Router();

//This routes reached under /admin/admin-product => GET request
router.get('/add-product', (req,res)=>{
	res.send(
		'<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit" >Send</button></form>'
		);
});

//This routes reached under /admin/admin-product => POST request
router.post('/add-product', (req,res)=> {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;