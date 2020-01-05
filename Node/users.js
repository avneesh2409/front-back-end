const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/get', (req, res,next) => {
    res.status(200).json({
        message: "successfully reistered",
        data: "get"
    })
})

router.post('/post', (req, res,next) => {
	console.log(req.body);
	// __dirname = home/Avneesh/Desktop/Node
	let mockfile  = path.join(__dirname,"mockfile/users.json");
    fs.readFile(mockfile,(error,data)=>{
    	let user = JSON.parse(data);
    	user.users.push(req.body);
    	let users = JSON.stringify(user);
    	fs.writeFile(mockfile,users,(err)=>{
    if (err) throw err;
    console.log('Data written to file');
    	})
    })
    res.status(200).json({
        message: "successfully reistered",
        data: "post"
    })
})

module.exports = router;