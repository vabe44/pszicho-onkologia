var express     = require("express");
var router      = express.Router();
var knex        = require('../config/knex/config');
var models      = require("../models");

// INDEX - show all tests
router.get("/", function(req, res) {

    // find multiple entries
    models.WhoqolNyersadat.findAll({
        include: [ models.Beteg, models.WhoqolAlkalom ]
    }).then(tesztek => {
        // csoportok will be an array of all Csoport instances
        res.render("qol/index", {
            tesztek: tesztek
        });
    });

});

// CREATE - add new test to DB
router.post("/", function(req, res){
    console.log(req.body);
    var szuldat = req.body.szulev + '-' + req.body.szulho + '-' + req.body.szulnap;
    var datum = new Date().toISOString().split('T')[0];
    console.log(szuldat);

    knex('whoqol_nyersadatok')
    .insert({
        user_id: req.body.nevmezo,
        csoport: "kontroll",
        datum: datum,
        alkalom: "QOL_1",
        megjegyzes: "ujak",
        f12: req.body.f12,
        f13: req.body.f13,
        f14: req.body.f14,
        f22: req.body.f22,
        f24: req.body.f24,
        f32: req.body.f32,
        f34: req.body.f34,
        f41: req.body.f41,
        f43: req.body.f43,
        f44: req.body.f44,
        f53: req.body.f53,
        f61: req.body.f61,
        f62: req.body.f62,
        f72: req.body.f72,
        f73: req.body.f73,
        f82: req.body.f82,
        f83: req.body.f83,
        f84: req.body.f84,
        f102: req.body.f102,
        f104: req.body.f104,
        f112: req.body.f112,
        f113: req.body.f113,
        f114: req.body.f114,
        f131: req.body.f131,
        f152: req.body.f152,
        f154: req.body.f154,
        f161: req.body.f161,
        f162: req.body.f162,
        f163: req.body.f163,
        f171: req.body.f171,
        f174: req.body.f174,
        f182: req.body.f182,
        f184: req.body.f184,
        f191: req.body.f191,
        f213: req.body.f213,
        f221: req.body.f221,
        f222: req.body.f222,
        f232: req.body.f232,
        f234: req.body.f234,
        f21: req.body.f21,
        f71: req.body.f71,
        f101: req.body.f101,
        f111: req.body.f111,
        f141: req.body.f141,
        f142: req.body.f142,
        f172: req.body.f172,
        f181: req.body.f181,
        f201: req.body.f201,
        f202: req.body.f202,
        f211: req.body.f211,
        f212: req.body.f212,
        f231: req.body.f231,
        g2: req.body.g2,
        g3: req.body.g3,
        g4: req.body.g4,
        f23: req.body.f23,
        f33: req.body.f33,
        f52: req.body.f52,
        f54: req.body.f54,
        f63: req.body.f63,
        f64: req.body.f64,
        f74: req.body.f74,
        f103: req.body.f103,
        f133: req.body.f133,
        f153: req.body.f153,
        f143: req.body.f143,
        f144: req.body.f144,
        f134: req.body.f134,
        f164: req.body.f164,
        f173: req.body.f173,
        f183: req.body.f183,
        f193: req.body.f193,
        f194: req.body.f194,
        f203: req.body.f203,
        f204: req.body.f204,
        f214: req.body.f214,
        f223: req.body.f223,
        f224: req.body.f224,
        f233: req.body.f233,
        f132: req.body.f132,
        g1: req.body.g1,
        f151: req.body.f151,
        f31: req.body.f31,
        f51: req.body.f51,
        f192: req.body.f192,
        f11: req.body.f11,
        f42: req.body.f42,
        f81: req.body.f81,
        f121: req.body.f121,
        f122: req.body.f122,
        f124: req.body.f124,
        f123: req.body.f123,
        f91: req.body.f91,
        f93: req.body.f93,
        f94: req.body.f94,
        f92: req.body.f92,
        f241: req.body.f241,
        f242: req.body.f242,
        f243: req.body.f243,
        f244: req.body.f244,
        nem: req.body.nem,
        szuletesi_datum: szuldat,
        vegzettseg: req.body.vegzettseg,
        csaladi_allapot: req.body.csaladi_allapot,
        beteg_e: req.body.beteg_e,
        diagnozis: req.body.diagnozis,
        sziv: req.body.sziv === undefined ? 0 : req.body.sziv,
        vernyomas: req.body.vernyomas === undefined ? 0 : req.body.vernyomas,
        reuma: req.body.reuma === undefined ? 0 : req.body.reuma,
        daganat: req.body.daganat === undefined ? 0 : req.body.daganat,
        legzoszervi: req.body.legzoszervi === undefined ? 0 : req.body.legzoszervi,
        cukorbetegseg: req.body.cukorbetegseg === undefined ? 0 : req.body.cukorbetegseg,
        halyog: req.body.halyog === undefined ? 0 : req.body.halyog,
        feloldali_benulas: req.body.feloldali_benulas === undefined ? 0 : req.body.feloldali_benulas,
        csonttores: req.body.csonttores === undefined ? 0 : req.body.csonttores,
        kronikus_ideg_v_lelki_problema: req.body.kronikus_ideg_v_lelki_problema === undefined ? 0 : req.body.kronikus_ideg_v_lelki_problema,
        kronikus_labbetegseg_fajdalom: req.body.kronikus_labbetegseg_fajdalom === undefined ? 0 : req.body.kronikus_labbetegseg_fajdalom,
        aranyer: req.body.aranyer === undefined ? 0 : req.body.aranyer,
        parkinson: req.body.parkinson === undefined ? 0 : req.body.parkinson,
        egyeb: req.body.egyeb
    })
    .then(function() {
        res.redirect("/qol/kesz");
    })
    .catch(function(error) {
        console.error(error)
    });
});

// NEW - show form to create new campground
router.get("/kesz", function(req, res) {
	res.render("qol/kesz");
});

// NEW - show form to create new campground
router.get("/new", function(req, res) {
	res.render("qol/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
    knex('whoqol_nyersadatok').where('id', req.params.id)
    .then(function(rows) {
        res.render("qol/show", {rows:rows});
    })
    .catch(function(error) {
        console.error(error)
    });
});

// EDIT qol route
router.get("/:id/edit", function(req, res) {
    var data = {};
    knex('whoqol_nyersadatok').where('id', req.params.id)
    .then(function(rows) {
        data.kerdoiv = rows;
    })
    .then(function(data) {
        return knex.select('id').from('betegek').orderBy('id', 'asc')
    })
    .then(function(rows) {
        data.betegek = rows;
    })
    .then(function(data) {
        return knex.select('kod').from('whoqol_alkalmak').orderBy('kod', 'asc')
    })
    .then(function(rows) {
        data.alkalmak = rows;
    })
    .then(function(data) {
        return knex.select('kod').from('whoqol_csoportok').orderBy('kod', 'asc')
    })
    .then(function(rows) {
        data.csoportok = rows;
    })
    .then(function() {
        console.log(data);
        res.render("qol/edit", {data:data});
    })
    .catch(function(error) {
        console.error(error)
    });
});

// UPDATE campground route
router.put("/:id", function(req, res){

    console.log(req.body);
    var szuldat = req.body.szulev + '-' + req.body.szulho + '-' + req.body.szulnap

    knex('whoqol_nyersadatok')
    .where('id', req.params.id)
    .update({
        user_id: req.body.user_id,
        csoport: req.body.csoport,
        datum: req.body.datum,
        alkalom: req.body.alkalom,
        megjegyzes: req.body.megjegyzes,
        f12: req.body.f12,
        f13: req.body.f13,
        f14: req.body.f14,
        f22: req.body.f22,
        f24: req.body.f24,
        f32: req.body.f32,
        f34: req.body.f34,
        f41: req.body.f41,
        f43: req.body.f43,
        f44: req.body.f44,
        f53: req.body.f53,
        f61: req.body.f61,
        f62: req.body.f62,
        f72: req.body.f72,
        f73: req.body.f73,
        f82: req.body.f82,
        f83: req.body.f83,
        f84: req.body.f84,
        f102: req.body.f102,
        f104: req.body.f104,
        f112: req.body.f112,
        f113: req.body.f113,
        f114: req.body.f114,
        f131: req.body.f131,
        f152: req.body.f152,
        f154: req.body.f154,
        f161: req.body.f161,
        f162: req.body.f162,
        f163: req.body.f163,
        f171: req.body.f171,
        f174: req.body.f174,
        f182: req.body.f182,
        f184: req.body.f184,
        f191: req.body.f191,
        f213: req.body.f213,
        f221: req.body.f221,
        f222: req.body.f222,
        f232: req.body.f232,
        f234: req.body.f234,
        f21: req.body.f21,
        f71: req.body.f71,
        f101: req.body.f101,
        f111: req.body.f111,
        f141: req.body.f141,
        f142: req.body.f142,
        f172: req.body.f172,
        f181: req.body.f181,
        f201: req.body.f201,
        f202: req.body.f202,
        f211: req.body.f211,
        f212: req.body.f212,
        f231: req.body.f231,
        g2: req.body.g2,
        g3: req.body.g3,
        g4: req.body.g4,
        f23: req.body.f23,
        f33: req.body.f33,
        f52: req.body.f52,
        f54: req.body.f54,
        f63: req.body.f63,
        f64: req.body.f64,
        f74: req.body.f74,
        f103: req.body.f103,
        f133: req.body.f133,
        f153: req.body.f153,
        f143: req.body.f143,
        f144: req.body.f144,
        f134: req.body.f134,
        f164: req.body.f164,
        f173: req.body.f173,
        f183: req.body.f183,
        f193: req.body.f193,
        f194: req.body.f194,
        f203: req.body.f203,
        f204: req.body.f204,
        f214: req.body.f214,
        f223: req.body.f223,
        f224: req.body.f224,
        f233: req.body.f233,
        f132: req.body.f132,
        g1: req.body.g1,
        f151: req.body.f151,
        f31: req.body.f31,
        f51: req.body.f51,
        f192: req.body.f192,
        f11: req.body.f11,
        f42: req.body.f42,
        f81: req.body.f81,
        f121: req.body.f121,
        f122: req.body.f122,
        f124: req.body.f124,
        f123: req.body.f123,
        f91: req.body.f91,
        f93: req.body.f93,
        f94: req.body.f94,
        f92: req.body.f92,
        f241: req.body.f241,
        f242: req.body.f242,
        f243: req.body.f243,
        f244: req.body.f244,
        nem: req.body.nem,
        szuletesi_datum: szuldat,
        vegzettseg: req.body.vegzettseg,
        csaladi_allapot: req.body.csaladi_allapot,
        beteg_e: req.body.beteg_e,
        diagnozis: req.body.diagnozis,
        sziv: req.body.sziv === undefined ? 0 : req.body.sziv,
        vernyomas: req.body.vernyomas === undefined ? 0 : req.body.vernyomas,
        reuma: req.body.reuma === undefined ? 0 : req.body.reuma,
        daganat: req.body.daganat === undefined ? 0 : req.body.daganat,
        legzoszervi: req.body.legzoszervi === undefined ? 0 : req.body.legzoszervi,
        cukorbetegseg: req.body.cukorbetegseg === undefined ? 0 : req.body.cukorbetegseg,
        halyog: req.body.halyog === undefined ? 0 : req.body.halyog,
        feloldali_benulas: req.body.feloldali_benulas === undefined ? 0 : req.body.feloldali_benulas,
        csonttores: req.body.csonttores === undefined ? 0 : req.body.csonttores,
        kronikus_ideg_v_lelki_problema: req.body.kronikus_ideg_v_lelki_problema === undefined ? 0 : req.body.kronikus_ideg_v_lelki_problema,
        kronikus_labbetegseg_fajdalom: req.body.kronikus_labbetegseg_fajdalom === undefined ? 0 : req.body.kronikus_labbetegseg_fajdalom,
        aranyer: req.body.aranyer === undefined ? 0 : req.body.aranyer,
        parkinson: req.body.parkinson === undefined ? 0 : req.body.parkinson,
        egyeb: req.body.egyeb
    })
    .then(function() {
        res.redirect("/qol/" + req.params.id);
    })
    .catch(function(error) {
        console.error(error)
    });
});

// // DESTROY CAMPGROUND ROUTE
// router.delete("/:id", function(req, res){
//    Campground.findByIdAndRemove(req.params.id, function(err){
//        if(err){
//            res.redirect("/campgrounds");
//        } else {
//            res.redirect("/campgrounds");
//        }
//    });
// });

module.exports = router;