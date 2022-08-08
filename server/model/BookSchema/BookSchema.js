const mongoose = require("mongoose")
const db = require("../../db/connection")


const bookSchema = new mongoose.Schema({
    title: {
        type: String,       
        required: true
    },
    category: {
        type: String,
        required: true
    }

})


const bookModel = mongoose.model("bookSchema", bookSchema)

module.exports = bookModel;


