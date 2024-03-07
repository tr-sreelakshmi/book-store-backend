//import express
import  express  from "express";
import mongoose from "mongoose";
 import BookRoute from './Route/BookRoute.js'
 import cors from 'cors'

//create a server application using express
const app = express();

app.use(express.json());

//middleware for handling CORS policy
//option 1: Allow All Origins with default of CORs(*)
app.use(cors());
//option 2:Allow custom origins
// app.use(cors({
//    origin:'  http://localhost:3000',
//    methods:['GET' ,'POST' ,'PUT','DELETE'],
//    allowedHeaders:['Content-Type']
// }))

app.get('/' , (req,res)=>{
   console.log(req);
   return res.status(234).send('Welcome to book store app');
})

//saving book

 app.use('/books',BookRoute); //get books
 


// Mongoose Connection
  const MongodbURL = 'mongodb+srv://bookstore:mongodb@cluster0.iia0abw.mongodb.net/bookproduct?retryWrites=true&w=majority'
  
//port 
const PORT =  8000 

 mongoose.connect(MongodbURL)
 .then(()=>{
   app.listen(PORT,()=>{
      console.log(`App is listening to port :${PORT}`);
   });
})
 .catch((error)=>{
console.log(error);

 });