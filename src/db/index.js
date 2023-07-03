import mongoose from "mongoose";

const bookSchema= new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String},
    description:{type: String},
    
})

const Book= mongoose.model('Book',bookSchema)

const getBooks=()=>{
    return Book.find()
}

export{
    Book,
    getBooks
}