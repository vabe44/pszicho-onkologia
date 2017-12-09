var express = require("express");
var router = express.Router();
var knex = require('../config/knex/config');
var middlewares = require("../middlewares");
var models = require("../models");

// INDEX - show all users
router.get("/", middlewares.isLoggedIn, function (req, res) {

    // find multiple entries
    models.user.findAll().then(users => {
        // users will be an array of all User instances
        console.log(users);
        res.render("users/index", {
            users: users
        });
    });

    // knex.select('id', 'firstname', 'lastname', 'username', 'email', 'about', 'last_login', 'createdAt', 'status').from('users')
    //     .then(function (rows) {
    //         console.log(rows);
    //         res.render("users/index", {
    //             users: rows
    //         });
    //     })
    //     .catch(function (error) {
    //         console.error(error)
    //     });
});

// NEW - show form to create new user
router.get("/new", function(req, res) {
	res.render("users/new");
});

// EDIT user route
router.get("/:id/edit", function (req, res) {
    var data = {};
    knex('users').where('id', req.params.id)
        .then(function (rows) {
            user = rows[0];
            res.render("users/edit", {
                user: user
            });
        })
        .catch(function (error) {
            console.error(error)
        });
});

// UPDATE user route
router.put("/:id", function (req, res) {

    console.log(req.body);

    knex('users')
        .where('id', req.params.id)
        .update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            about: req.body.about
        })
        .then(function () {
            res.redirect("/users");
        })
        .catch(function (error) {
            console.error(error)
        });
});

module.exports = router;