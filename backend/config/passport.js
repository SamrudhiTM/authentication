const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const User = require('../models/User');

const CustomStratergy=require('passport-custom').Strategy;


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:  "http://localhost:5000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) return done(null, existingUser);

  const user = await User.create({
    googleId: profile.id,
    name: profile.displayName,
    email: profile.emails[0].value,
    avatar: profile.photos[0].value
  });
  done(null, user);
}));

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ facebookId: profile.id });
  if (existingUser) return done(null, existingUser);
 

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(async (id, done) => {
//     const user = await User.findById(id);
//     done(null, user);
//   });
  
  const user = await User.create({
    facebookId: profile.id,
    name: profile.displayName,
    email: profile.emails?.[0]?.value || '',
    avatar: profile.photos?.[0]?.value || ''
  });
  done(null, user);
}));

passport.use('apple',new CustomStratergy(async(req,done)=>{
    try {
        const mockProfile = {
          id: 'mock-apple-id',
          email: 'mockuser@apple.com',
          name: { givenName: 'Mock', familyName: 'User' },
          provider: 'apple',
        };
    let user=await User.findOne({email:mockProfile.email});
    if(!user){
        user=new User({
            name:`${mockProfile.name.givenName}${mockProfile.name.familyName}`,
            email:mockProfile.email,
            provider:mockProfile.provider,
        });
        await user.save();
    }
    return done(null,user);
}catch(err){
    return done(err,null);

}
}));

