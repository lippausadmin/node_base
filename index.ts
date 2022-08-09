import express from "express"
import passport from "passport";
import cors from "cors"
import { product } from "./src/controllers/Product";
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
// // use `prisma` in your application to read and write data in your DB

import routes from "./src/routes/routes";

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json())
server.use(cors())

// server.use(passport.initialize())

// server.use(routes)

// server.listen(3005);

server.use("/product", product);


server.listen(3005);