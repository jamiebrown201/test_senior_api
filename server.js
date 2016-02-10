var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();
var passport = require('passport');
var FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(passport.initialize());


app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});


passport.use(new FitbitStrategy({
    clientID:     "",
    clientSecret: "",
    callbackURL: "http://localhost:8080/auth/fitbit/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ fitbitId: profile.id }, function (err, user) {
    //   return done(err, user);
  //   }
  // );
  console.log(profile);
  console.log(accessToken);
  console.log(refreshToken);
  console.log(done);

  }
));


app.get('/auth/fitbit',
  passport.authenticate('fitbit', { scope: ['activity','heartrate','location','profile'] }
));

app.get( '/auth/fitbit/callback', passport.authenticate( 'fitbit', {
        successRedirect: '/auth/fitbit/success',
        failureRedirect: '/auth/fitbit/failure'
}));
