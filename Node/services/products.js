const express = require('express');
const router = express.Router();
const path = require('path');
const users = require(path.join(__dirname, "mockfile/users.json"));
const { User } = require('../model')

router.get('/get', (req, res, next) => {

    res.status(200).json({
        message: "successfully reistered",
        data: users.users
    })
})

router.post('/post', (req, res, next) => {
    // const { firstName, lastName, email } = req.body
    // console.log(firstName, lastName, email);

    // User.create({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email
    // }).then(response => {
    //     res.status(200).send("products created")
    //     console.log(response)
    // }).catch(err => {
    //     res.status(404).json({
    //         error: "model is not created ",

    //     })
    //     console.log(err)
    // })
    // User.sync()
    res.status(200).send("successfully connected")

})

module.exports = router;

