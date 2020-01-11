const express = require('express');
const router = express.Router();
const path = require('path');
const users = require(path.join(__dirname, "mockfile/users.json"));

router.get('/get', (req, res, next) => {

    res.status(200).json({
        message: "successfully reistered",
        data: users.users
    })
})

router.get('/post', (req, res, next) => {
    res.status(200).json({
        message: "successfully reistered",
        data: "products.js/post"
    })
})

module.exports = router;

