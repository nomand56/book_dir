const express = require("express")
const bookModel = require("./model/BookSchema/BookSchema")
const app = express()
app.use(express.json())
require("./db/connection")

app.post('/sendBooks', (req, res) => {
    let user = new bookModel(req.body)
    user.save().then((result) => {
        console.log("added Data Book")
    }).catch((err) => {
        console.log("an error occurred")
    })
    res.send("data has been added")
})
app.get("/getBooks", (req, res) => {
    bookModel.find().then((result) => {

        res.send(result)
    })
})
app.delete("/BOOKDIR/:id", async (req, res) => {
    const { id } = req.params.id;
    await bookModel.findByIdAndDelete(id)
    res.json("item has been deleted")
})

app.listen(4000, console.log("server started"))