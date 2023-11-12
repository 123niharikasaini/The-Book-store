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
        required:false
    },
    category:{
        type:Array,
        required:false
    },
    imgURL:{
        type:String,
        required:false
    },
    pdfURL:{
        type:String,
        required:false
    }
});

export const Books=mongoose.model('Books',bookSchema);