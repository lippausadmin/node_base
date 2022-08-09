import { Request, Response } from "express";
import { User } from "../../models/User";
import { encrypt, decrypt } from "../../config/password";



export const getUser = async (req: Request, res: Response) => {
	return res.json("teste")
}

export const createUser = async (req: Request, res: Response) => {

	const { body: { email, password, ...everything } } = req

	const hasEmail = await User.findOne({
		where: {
			email
		}
	})

	if(!!hasEmail){
		return res.json({error: "email repetido"})
	}

	const hashPassword = await encrypt(password)

	const newUser = await User.create({
		email, 
		password: hashPassword, 
		...everything
	})

	res.header({"Access-Control-Allow-Origin": true});
	return res.json({newUser})

}

export const login = async (req: Request, res: Response) => {

	const { body: { email, password } } = req

	try {
		const user = await User.findOne({
			where: { email }
		})
	
		const login = await decrypt(password, user ? user.password : "")
	
		if(login){
			return res.json({ token: email, user })
		}
		else{
			res.status(403)
			return res.json({ error: "Senha incorreta" })
		}
	}
	catch {
		
	}

}
