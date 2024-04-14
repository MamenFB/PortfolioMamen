import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();

mongoose.connect(process.env.MONGO) 
    .then(() => console.log('MongoDB connected...👌'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

app.listen(4000, () => {
    console.log('server is running on port 4000👍');
});