import express from 'express';

const Server = class {
	constructor() {
		this.express = express;
	}
	expressServer() {
		const app = this.express();
		app.get('/', (req, res) => {
		 res.status(200).send('welcome to ninjacom')
		})
		return app;
	}
	
}

export default Server;

