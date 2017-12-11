const express = require("express");
const router = express.Router();
const knex = require('../config/knex/config');
const mw = require("../middlewares");
const models = require("../models");
const moment = require('moment');

// INDEX - show all users
router.get("/", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const users = await models.user.findAll();
    res.render("users/index", { users, moment });

}));

// NEW - show form to create new user
router.get("/new", function(req, res) {
    res.render("users/new");
});

// EDIT user route
router.get("/:id/edit", mw.isAdmin, mw.asyncMiddleware(async (req, res, next) => {

    const user = await models.user.findById(req.params.id);
    res.render("users/edit", { user });

}));

// UPDATE user route
router.put("/:id", mw.isAdmin, mw.asyncMiddleware(async (req, res, next) => {

    const user = await models.user.findById(req.params.id);
    await user.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role: req.body.role,
        status: req.body.status,
        about: req.body.about
    });
    req.flash("success", "Siker! Felhasználó módosítva.");
    res.redirect("/users");

}));

// DELETE user route
router.delete('/:id', mw.isAdmin, mw.asyncMiddleware(async (req, res, next) => {

    const user = await models.user.findById(req.params.id);
    await user.destroy();
    req.flash("success", "Siker! Felhasználó törölve.");
    res.redirect('/users');

}));

module.exports = router;