const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mw = require('./custom/middleware')
const server = express()
const logger = mw.logger
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')



server.use(helmet(), logger, express.json(), cors())
server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)

server.get('/', logger, (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`)
})

module.exports = server
