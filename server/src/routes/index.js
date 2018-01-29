
const routes = app =>  {
	app.get('/', (req, res) => {
	 res.status(200).send('welcome to ninjacom')
	})
}

export default routes;