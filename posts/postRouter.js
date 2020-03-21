const express = require('express')
const router = express.Router()
const Posts = require('./postDb')
const mw = require('../custom/middleware')
const validPostId = mw.validPostId
const validPost = mw.validPost

router.get('/', (req, res) => {
	Posts.get()
		.then(post => {
			res.status(200).json(post)
		})
		.catch(err => {
			res.status(500).json({ error: 'You found me but I cannot provide any info, try again!', err })
		})
})

router.get('/:id', validPostId, (req, res) => {
	const { id } = req.params
	Posts.getById(id)
		.then(post => {
			res.status(200).json(post)
		})
		.catch(err => {
			res.status(500).json({ error: 'You found me but I cannot provide any info, try again!', err })
		})
})

router.delete('/:id', validPostId, (req, res) => {
	const { id } = req.params
	Posts.getById(id)
		.then(post => {
			post
				? Posts.remove(id).then(deleted => {
						deleted ? res.status(200).json({ success: `Post ${id} was deleted!`, info: post }) : null
				  })
				: null
		})
		.catch(err => {
			res.status(500).json({ error: 'You found me but I cannot provide any info, try again!', err })
		})
})

router.put('/:id', validPostId, validPost, (req, res) => {
	const { id } = req.params

	Posts.update(id, req.body)
		.then(post => {
			res.status(200).json({ success: 'Info Updated!', info: req.body })
		})
		.catch(err => {
			res.status(500).json({ error: 'You found me but I cannot provide any info, try again!', err })
		})
})

module.exports = router
