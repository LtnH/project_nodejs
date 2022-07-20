const Book = require('../model/book')

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'harry Poter',
                author: 'J-K Rowling',
                creator: {
                    name: 'Mario',
                },
                createdAt: new Date()
            }
        ]
    });
};

exports.postNew = (req, res, next) => {
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
}