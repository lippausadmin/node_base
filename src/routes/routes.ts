import express from "express";
import * as UserControllers from "../controllers/User"

const routes = express.Router();

// GET
// POST
// PUT 
// PATCH 
// DELETE

// USERS

routes.get("/users", UserControllers.getUser)
// routes.get("/user/:id", UserControllers.getUser)
routes.post("/user", UserControllers.createUser)
routes.patch("/user", UserControllers.login)
// routes.put("/user/:id", UserControllers.updateUser)

export default routes;