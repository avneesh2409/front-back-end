const express = require('express');
const router = express.Router();
const { Account, Role } = require('../model')
const { sequelize } = require('../model/initialise')
router.get('/get', (req, res) => {
    Account.findAll().then(r => {
        res.status(200).json({
            message: "sucess",
            data: r
        })
    }).catch(err => {
        res.status(404).send("error occured :- " + err.message)
    })
})

router.post('/post', (req, res) => {
    const { name, password, email, role, contact, createdBy, modifiedBy, isActive } = req.body
    Role.findAll({
        attributes: ['id'],
        where: {
            role: role
        }
    }).then(role => {
        id = role[0].id
        sequelize.sync().then(r => {
            Account.create({
                name: name,
                password: password,
                roleId: id,
                contact: contact,
                create: createdBy,
                modify: modifiedBy,
                email: email,
                isActive: isActive
            }).then(ac => {
                res.status(200).json({
                    message: "successfully created",
                    data: ac
                })

            })

        }).catch(err => {
            res.status(404).send("error occured" + err.message)
        })
    }).catch(err => {
        res.status(404).send(err.message)
    })
})

router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id)
    Account.destroy({
        where: {
            id: req.params.id
        }
    }).then(r => {
        res.send("deleted" + r + "row")
    }).catch(err => {
        res.status(404).send("error :- " + err.message)
    })

})

router.put('/put', (req, res) => {
    console.log(req.body)
    Account.update(
        { contact: req.body.contact },
        { where: { email: req.body.email } }
    )
        .then(r => { res.send("rows updated" + r) }).catch(err => {
            res.send(err.message)
        })
})

module.exports = router;
