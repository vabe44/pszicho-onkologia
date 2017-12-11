module.exports = {
    isLoggedIn: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            req.flash("error", "Kérlek, előbb jelentkezz be.");
            res.redirect('/login');
        }
    },

    isAdmin: function(req, res, next) {
        if (res.locals.currentUser.role === "admin") {
            return next();
        } else {
            req.flash("error", "Ehhez adminisztrátori engedély szükséges.");
            res.redirect('back');
        }
    },

    asyncMiddleware: function(fn) {
        return function (req, res, next) {
          Promise.resolve(fn(req, res, next)).catch(next);
        };
    },
}