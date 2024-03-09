
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { initialiseDatabase } from './initialise.js';

import productRoutes from './routes/products.js';
import userRoutes from "./routes/users.js";
// import soldItemRoutes from "./routes/soldItems.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
// app.use('/sold-items', soldItemRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(async () => {
  console.log('Connected to MongoDB');
  // Initialize the database
  await initialiseDatabase();
  // Start the server
  app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
})
.catch((error) => console.log(`Database Error: ${error} did not connect`));