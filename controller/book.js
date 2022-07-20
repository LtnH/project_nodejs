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

    res.status(201).json({
        message: 'book added successfully.',
        post: {
            _id: new Date().toString(),
            title: title,
            author: author,
            creator: {name: 'Sciences-u'},
            createdAt: new Date()
        }
    })
}