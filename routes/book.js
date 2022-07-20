const express = require('express');

const bookController = require('../controller/book')

const router = express.Router();

router.get('/posts', bookController.getPosts);

router.post('/new', bookController.postNew)

module.exports = router;