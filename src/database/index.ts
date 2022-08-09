import { Sequelize } from "sequelize"
import dotenv from "dotenv"
import * as pg from "pg"

dotenv.config()

// PG_ID=
// PG_PORT=
// PG_DB=
// PG_USER=
// PG_PASSWORD=

export const sequelize = new Sequelize(
	process.env.PG_DB as string,
	process.env.PG_USER as string,
	process.env.PG_PASSWORD as string,
	{
		dialect: "postgres",
		dialectModule: pg,
		port: parseInt(process.env.PG_PORT as string),
		host: process.env.PG_ID as string,
		timezone: "-03:00",
	},
)