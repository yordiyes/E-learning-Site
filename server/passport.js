// passport.js configuration
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import Users from "./models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      prompt: "select_account",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists in the database
        let user = await Users.findOne({ googleId: profile.id });
        if (!user) {
          // Create a new user if it doesn't exist
          user = await Users.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            role: "student", // Default role for new users
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => Users.findById(id, done));

export default passport;