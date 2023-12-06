import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import { Books } from './models/book.js';
// import { ObjectId } from 'mongodb';
import router from './route/routes.js';
import dotenv from "dotenv"

dotenv.config({path:'./config.env'})


const PORT=process.env.PORT;
const app=express();

// middleware 
// 1. to make connection with frontend
app.use(cors());
    // all pages can access this server

// 2. for parsing json objects and can be accessed using request.body
app.use(express.json());



// =============================================================== //
// ---------------http route-----------------------------//
app.use('/books',router);
                    // // for home page route
                    // app.get('/',(req,res)=>{
                    //     return res.send("Working fine");
                    // });

                    // // for adding new books(one at a time)
                    // app.post('/add',async(req,res)=>{
                    //     try{
                    //         const data=req.body;
                    //         if(!data.bookTitle || !data.bookAuthor){
                    //             return res.status(400).json({message:"Bad request"});
                    //         }
                    //         Books.create(data);
                    //         return res.status(201).send("added");
                    //     }
                    //     catch(error){
                    //         res.status(500).send({msg:error.message});
                    //     }
                    // });

                    // // http route showing all books
                    // app.get('/all-books',async(req,res)=>{
                    //     try{
                    //         const books=await Books.find();
                    //         return res.status(200).json(books);
                    //     }catch(error){
                    //         res.status(500).send({message:error.message});
                    //     }
                    // });

                    // // http route to update a book ==>patch method
                    // app.patch('/update/:id',async(req,res)=>{
                    //     try{
                    //         const {id}=req.params;
                    //         const updateData=req.body;
                    //         // object for filtering the database table
                    //         const filter={_id: new ObjectId(id)};
                    //         // set the upsert to true so that if doc is not find then it will insert new
                    //         const options={upsert:true};
                    //         const updateDoc={
                    //             $set:{...updateData}
                    //         }
                    //         const result=await Books.updateOne(filter,updateDoc,options);
                    //         if(!result){
                    //             return res.status(404).json({message:"Not found"});
                    //         }
                    //         res.status(200).send({message:"Updated"});
                    //     }catch(error){
                    //         res.status(500).json({message:error.message});
                    //     }
                    // });

                    // // http route to delete book by id
                    // app.delete('/delete/:id',async(req,res)=>{
                    //     try{
                    //         const {id}=req.params;
                    //         const filter={_id: new ObjectId(id)};
                    //         const result=await Books.deleteOne(filter);
                    //         if(!result){
                    //             return res.status(404).send({message:"Not Found"});
                    //         }
                    //         res.status(200).send({message:"Deleted successfully"});
                    //     }catch(error){
                    //         res.status(500).json({message:error.message});
                    //     }
                    // });

                    // // http route to filter the data using category field
                    // app.get("/books",async(req,res)=>{
                    //     try{
                    //         let query={};
                    //         if(req.query?.category){
                    //             query={category:req.query.category};
                    //         }
                    //         const result=await Books.find(query);
                    //         if(result){
                    //             return res.status(200).send(result);
                    //         }
                    //         res.status(404).send({message:"Not found"});
                    //     }catch(error){
                    //         res.status(500).send({message:error.message});
                    //     }
                    // });

// =========================================================================//


// =======================================================================//
// mongoDB configurations
const mongoDBURL=process.env.DATABASE;
// connecting mongoose to mongoDB
mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("App is connected to database successfully");
}).catch((error)=>{console.log()});

// perfectly working
app.listen(PORT,()=>{
    console.log(`App is listening to port no.${PORT}`);
});


// ================================
// Password of mongoDB database
// username:=> demoUser  ==============>> password:=> PSyvhcZQiyF1q9Ox

