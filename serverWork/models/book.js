import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    bookTitle:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true
    },
    bookDesc:{
        type:String,
        required:true
    },
    category:{
        type:Array,
        required:true
    },
    imgURL:{
        type:String,
        required:true
    },
    pdfURL:{
        type:String,
        required:true
    }
});

export const Books=mongoose.model('Books',bookSchema);