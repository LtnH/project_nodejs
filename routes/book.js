const express = require('express');
const { body } = require('express-validator/check')

const bookController = require('../controller/book')

const router = express.Router();

router.get('/all', bookController.getAll);

router.post('/new',
    [
        body('title')
            .trim().isLength({ min: 5 }),
        body('author')
            .trim().isLength({ min: 5 }),
        body('gender')
            .trim().isLength({ min: 5 }),
        body('date')
            .trim().isInt({ min: 1400, max: 2022 }),
        body('available')
            .trim().isBoolean()
    ],
    bookController.postNew);

router.get('/one/:bookId', bookController.getOne);

module.exports = router;