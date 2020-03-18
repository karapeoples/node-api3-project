const express = require('express')
const helmet = require('helmet')
const mw = require('./custom/middleware')
const server = express()
const logger = mw.logger
const userRouter=require('./users/userRouter')

server.use(helmet(), logger, express.json())
server.use('/api/users', userRouter)

server.get('/', (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`)
})

module.exports = server
