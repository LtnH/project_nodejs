const express = require('express');
const { body, query } = require('express-validator/check')

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
            .isInt({ min: 1400, max: 2022 }),
        body('available')
                .isBoolean()
    ],
    bookController.postNew);

router.get('/info/:bookId', bookController.getInfo);

router.put('/available',
    [
        query('bookId')
            .exists(),
        query('available')
            .isBoolean()
    ],
    bookController.putAvailable);

router.delete('/suppress', bookController.deleteSuppress);

module.exports = router;