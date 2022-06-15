import express from 'express';
import connectDB from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;
 
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port: ${port}`);
});