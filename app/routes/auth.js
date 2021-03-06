module.exports = function(app, passport) {

    /* GET signup page. */
    app.get('/signup', function (req, res, next) {
        res.render('signup');
    });

    /* POST signup page. */
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/betegek',
            failureRedirect: '/signup'
        }
    ));

    /* GET login page. */
    app.get('/login', function (req, res, next) {
        res.render('login');
    });

    /* POST login page. */
    app.post('/login', passport.authenticate('local-signin', {
            successRedirect: '/betegek',
            failureRedirect: '/login',
            failureFlash: true,
        }
    ));

    /* GET logout page. */
    app.get('/logout', function (req, res, next) {
        req.session.destroy(function(err) {
            res.redirect('/login');
        });
    });

}