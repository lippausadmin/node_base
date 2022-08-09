import express from "express"
import passport from "passport";
import cors from "cors"
import { product } from "./src/controllers/Product";
import * as UserControllers from "./src/controllers/User"
import routes from "./src/routes/routes";
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
// // use `prisma` in your application to read and write data in your DB


const server = express();


server.use(express.json())
server.use(cors())

// server.use(passport.initialize())

server.use(routes)

// server.listen(3005);

// GET
// POST
// PUT 
// PATCH 
// DELETE

// USERS

// server.use("/product", product);

// server.use("/users", UserControllers.getUser)
// // routes.get("/user/:id", UserControllers.getUser)
// server.use("/user", UserControllers.createUser)
// server.use("/user", UserControllers.login)
// routes.put("/user/:id", UserControllers.updateUser)


server.listen(3005);