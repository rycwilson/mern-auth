
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const databaseName = 'mern-auth';
    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {});
    console.log(`Database connected : ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB;