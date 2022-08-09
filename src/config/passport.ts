import { BasicStrategy } from "passport-http"
import passport from "passport";
import { User } from "../models/User";

const notAuthorizedJson = { status: 401, message: "Não autorizado"}

passport.use(new BasicStrategy( async (email, password, done) => {
  
  if(email && password){

    const user = await User.findOne({
      where: { email, password }
    })

  }

  return done(notAuthorizedJson, false)
  
  
}))

export default passport