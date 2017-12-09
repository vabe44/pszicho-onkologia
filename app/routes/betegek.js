const express = require('express');
const router = express.Router();
const mw = require("../middlewares");
// const m = require("../models");
const knex        = require('../config/knex/config');
require('../public/scripts/arrFindByProp');
const models = require("../models");
const moment = require('moment');

// INDEX - show all patients
router.get("/", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const betegek = await models.Beteg.findAll({ include: [ models.BetegCsoport ] });
    res.render("betegek/index", { betegek });

}));


// NEW - show form to create new patient
router.get("/new", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const csoportok = await models.BetegCsoport.findAll();
    res.render("betegek/new", { csoportok });

}));

// CREATE - add new test to DB
router.post("/", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const ujbeteg = await models.Beteg.create({
        azonosito: req.body.azonosito,
        nev: req.body.nev,
        megjegyzes: req.body.megjegyzes,
        fazis: req.body.fazis,
        kutataszaro: req.body.kutataszaro,
        beteg_csoport_id: req.body.csoport
    });
    req.flash("success", "Siker! Beteg elmentve.");
    res.redirect("/betegek/" + beteg.id);

}));

// SHOW - shows more info about one patient
router.get("/:id", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const beteg = await models.Beteg.findOne({
        where: { id: req.params.id },
        include: [{ all: true, nested: true }]
    });

    res.render("betegek/show", {beteg, moment });

}));

// SHOW patient edit page
router.get("/:id/edit", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const beteg = await models.Beteg.findOne({
        where: { id: req.params.id },
        include: [{ all: true, nested: true }]
    });

    const csoportok = await models.BetegCsoport.findAll();

    res.render("betegek/edit", { beteg, csoportok });

}));

// EDIT patient route
router.put("/:id", mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const beteg = await models.Beteg.findById(req.params.id);
    await beteg.update({
        azonosito: req.body.azonosito,
        nev: req.body.nev,
        megjegyzes: req.body.megjegyzes,
        fazis: req.body.fazis,
        kutataszaro: req.body.kutataszaro,
        beteg_csoport_id: req.body.csoport
    });
    req.flash("success", "Siker! Beteg modositva.");
    res.redirect("/betegek/" + beteg.id);

}));

// DELETE patient route
router.delete('/:id', mw.isLoggedIn, mw.asyncMiddleware(async (req, res, next) => {

    const beteg = await models.Beteg.findById(req.params.id);
    await beteg.destroy();
    req.flash("success", "Siker! Beteg torolve.");
    res.redirect('/betegek');

}));

module.exports = router;