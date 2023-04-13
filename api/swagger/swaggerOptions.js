import swaggerJSDoc from "swagger-jsdoc";
import { ap }  from '../../config/config.js';

const options = {
	definition: {
		openapi: "3.0.3",
		language: 'en-US',      // Change response language. By default is 'en-US'
    	disableLogs: false,     // Enable/Disable logs. By default is false
    	autoHeaders: false,     // Enable/Disable automatic headers capture. By default is true
    	autoQuery: false,       // Enable/Disable automatic query capture. By default is true
    	autoBody: true , 		// Enable/Disable automatic Body capture. By default is true
		info: {
			title: "Result processing Application",
			version: "1.0.0",
			description:
				"A simple implementation of a result processing application for post and processing students results",
			termsOfService: "http://example.com/terms",
			contact: {
				name: "API Support",
				url: "http://example.com/support",
				email: "support@example.com",
			}
		},

		servers: [
			{
				url: `${ap.server.host+ap.server.port}`,
				description: "Internal server!",
			},
			{
				url: `http://localhost:4000`,
				description: "External server!",
			},
		],
	},
	apis: ["../routes/*.js"],
};

const specs = swaggerJSDoc(options);

export default specs;