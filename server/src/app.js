import express from 'express';
import routes from './routes/index'

const Server = class {
	constructor() {
		this.express = express;
		this.route = routes
	}
	expressServer() {
		const app = this.express();
		this.route(app)
		return app;
	}
	
}

export default Server;

