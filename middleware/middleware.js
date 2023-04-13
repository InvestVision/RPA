import express from "express";
import cors from "cors";
import StatusCodes from "http-status-codes";
import admin from "../routes/adminRouter.js";
import compression from "compression";


// initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression({ level: 9, compress: true, threshold: 0 }));




// Middleware for routers
app
	.use("/", admin)
	.use(function (req, res) {
		return res.status(StatusCodes.BAD_REQUEST).send("Sorry can't find that!"); // catch undefined routes and respond with 404
	})
	.use((err, req, res) => {
		console.error(err.stack);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send("Something broke!"); // catch server errors and respond with 500
	});

export default app;