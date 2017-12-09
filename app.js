var express = require("express");
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require("body-parser");
var request = require("request");
var methodOverride  = require("method-override");
var knex = require("./app/config/knex/config");
var env = require('dotenv').load();
var flash = require('express-flash');
app.use(express.static(__dirname + "/app/public"));
app.use(methodOverride("_method"));

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// For EJS
app.set('views', './app/views');
app.set('view engine', 'ejs');

// For Flash Messages
app.use(flash());

// Models
var models = require("./app/models");

// Load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

// Sync Database
models.sequelize.sync().then(function() {
   console.log('Nice! Database looks fine')
}).catch(function(err) {
   console.log(err, "Something went wrong with the Database Update!")
});

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

var qolRoutes   = require("./app/routes/qol");
var pikRoutes   = require("./app/routes/pik");
var betegekRoutes   = require("./app/routes/betegek");
var usersRoutes   = require("./app/routes/users");
var csoportokRoutes   = require("./app/routes/csoportok");

app.use("/qol", qolRoutes);
app.use("/pik", pikRoutes);
app.use("/betegek", betegekRoutes);
app.use("/users", usersRoutes);
app.use("/csoportok", csoportokRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(3002, 'localhost', function(req, res){
    console.log("The Server Has Started!");
});