
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/products.js';
import userRouter from "./routes/users.js";

const app = express();

app.use(cors());

app.use('/products', productRoutes);
app.use('/users', userRouter);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);