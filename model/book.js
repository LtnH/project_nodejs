const mongoose = require('mongoose');
const {stringify} = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        available: {
            type: Boolean,
            required: true
        }
    }
);

module.exports = mongoose.model('book', bookSchema);