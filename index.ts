import express from "express"
import cors from "cors"
import routes from "./src/routes/routes";

const server = express();

server.use(express.json());

server.use(cors());

server.use(routes);

server.listen(3005);