import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { ap, mongo }  from './config/config.js';
import all_Wares from "./middleware/middleware.js";
import chalk from "chalk";

// initialize express
const app = express();


// initialize middleware
app.use(express.static(path.join('public')));
app.use("/", all_Wares);



// Connections to both database server and the App server
mongoose
	.connect(`${mongo.server.host+mongo.server.port}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Connected to MongoDB on address`, chalk.yellow`${mongo.server.host+mongo.server.port+mongo.server.dbName}`);
		app.listen(ap.server.port, () =>
			console.log(
				"Server running on", chalk.blueBright`${ap.server.host+ap.server.port}`
			)
		);
	})
	.catch((error) =>
		console.log(
			"Please make sure Mongodb is installed and running on port: " +
				error.hostname
		)
	);
