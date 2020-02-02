const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { Account} = require('../model')

router.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

router.post('/api/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});

router.post('/api/login', (req, res) => {
  Account.findOne({
  where:{
  	email:req.body.email,
  	password:req.body.password
  }
  }).then(res => {
  	jwt.sign({user:res}, 'secretkey', { expiresIn: '3600s' }, (err, token) => {
	  res.json({
    		token
    		});  
	});
   
  }).catch(err => {
      res.json({
    	error:err.message
    })
    })
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
   if(typeof bearerHeader !== 'undefined') {
     const bearer = bearerHeader.split(' ');
     const bearerToken = bearer[1];
     req.token = bearerToken;
     next();
  } else {
     res.sendStatus(403);
  }

}

module.exports = router



