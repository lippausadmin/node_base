import dotenv from "dotenv"
import bcrypt from "bcrypt"


export async function encrypt(notSecurityPassword: string) {

  const saltRounds = Number(process.env.PG_PASSWORD)

  const securityPassword = await bcrypt.hash(notSecurityPassword, saltRounds)

  return securityPassword

}

export async function decrypt(password: string, hashPassword: string) {

  const compare = await bcrypt.compare(password, hashPassword)

  return compare

}
