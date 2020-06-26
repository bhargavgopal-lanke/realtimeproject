const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const product = [];

//This routes reached under /admin/admin-product => GET request
router.get('/add-product', (req,res)=>{
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

//This routes reached under /admin/admin-product => POST request
router.post('/add-product', (req,res)=> {
	product.push({ title: req.body.title });
	res.redirect('/');
});

/*module.exports = router;*/
exports.routes = router;
exports.products = product;
