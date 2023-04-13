import express from "express";
import cors from "cors";
import StatusCodes from "http-status-codes";
import admin from "../routes/adminRouter.js";
import compression from "compression";
import docs from "../api/swagger/swaggerOptions.js";
import swaggerUI from "swagger-ui-express";

// initialize express app
const app = express();

// Middleware
app
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use(cors())
	.use(compression({ level: 9, compress: true, threshold: 0 }))
	.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs))




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