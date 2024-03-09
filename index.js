
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from './routes/products.js';
// import userRoutes from "./routes/users.js";
// import soldItemRoutes from "./routes/soldItems.js";

dotenv.config();

const app = express();

app.use(cors());

app.use('/products', productRoutes);
// app.use('/users', userRoutes);
// app.use('/sold-items', soldItemRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);