var express = require("express");
var router = express.Router();
var middlewares = require("../middlewares");
var models = require("../models");

// INDEX - show all groups
router.get("/", middlewares.isLoggedIn, function (req, res) {

    // find multiple entries
    models.BetegCsoport.findAll().then(csoportok => {
        // csoportok will be an array of all Csoport instances
        res.render("csoportok/index", {
            csoportok: csoportok
        });
    });

});

// NEW - show form to create new csoport
router.get("/new", function (req, res) {
    res.render("csoportok/new");
});

// CREATE - add new csoport to DB
router.post("/", function (req, res) {

    models.BetegCsoport.create({
        nev: req.body.nev,
        leiras: req.body.leiras
    })
    .then(csoport => {
        res.redirect("/csoportok");
    })
    .catch(error => {
        console.log("Oops, something went wrong. " + error);
    });

});

// EDIT - show form to edit csoport
router.get("/:id/edit", middlewares.isLoggedIn, function (req, res) {

    models.BetegCsoport.findById(req.params.id)
    .then(csoport => {
        res.render("csoportok/edit", {
            csoport: csoport
        });
    });

});

// UPDATE - update csoport in DB
router.put("/:id", middlewares.isLoggedIn, function (req, res) {

    models.BetegCsoport.findById(req.params.id)
    .then(csoport => {
        csoport.update({
            nev: req.body.nev,
            leiras: req.body.leiras
        }).then(() => {
            res.redirect("/csoportok");
        });
    });

});

// DESTROY - delete csoport
router.delete("/:id", middlewares.isLoggedIn, function (req, res) {

    models.BetegCsoport.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(csoport => {
        res.redirect("/csoportok");
    })
    .catch(error => {
        console.log("Oops, something went wrong. " + error);
    })

});

module.exports = router;