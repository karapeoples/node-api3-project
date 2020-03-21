// code away!const favicon = require('serve-favicon')
require('dotenv').config()
const server = require('./server.js')

const port = process.env.PORT || 4994

server.listen(port, () => {
	console.log(`\n*^^*~~Server Running on http://localhost:${port}~~*^^*\n`)
})