const express = require('express');
const router = express.Router();
const path = require('path');
var fs = require('fs');
const file = path.join(__dirname, "mockfile/users.json")
const users = require(file);

router.get('/get', (req, res, next) => {

    res.status(200).json({
        message: "successfully reistered",
        data: users.users
    })
})

router.post('/post', (req, res, next) => {
    console.log(req.body)
    fs.readFile(file, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
            res.status(400).json({
                data: "unable to process the request"
            })

        } else {
            obj = JSON.parse(data);
            obj.users.push(req.body);
            json = JSON.stringify(obj);
            fs.writeFile(file, json, 'utf8', function (response) {
                console.log(response)
                res.status(200).json({
                    data: "successfully stored in the file"
                })
            });
        }
    });

})

module.exports = router;

