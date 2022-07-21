const Book = require('../model/book')
const { validationsResult } = require('express-validator/check')

exports.getAll = (req, res, next) => {
    Book.find()
        .then(posts => {
            res
                .status(200)
                .json({ message: 'Fetched posts successfully.', posts: posts });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.postNew = (req, res, next) => {
    const errors = validationsResult(req);
    if (errors.isEmpty()) {
        const error = new Error('Validation failed, data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const title = req.body.title;
    const author = req.body.author;
    const gender = req.body.gender;
    const date = req.body.date;
    const available = req.body.available;

    const book = new Book({
        title: title,
        author: author,
        gender: gender,
        date: date,
        available: available,
    })

    book
        .save()
        .then(result => {
        res.status(201).json({
            message: 'Post created successfully!',
            post: result
        });
    }).catch(err =>{
        console.log(err);
    });
};

exports.getOne = (req, res, next) => {
    const bookId = req.params.bookId;
    Book.findById(bookId)
        .then(post => {
            if (!post) {
                const error = new Error('book not exist.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'find your book !', post: post})
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};