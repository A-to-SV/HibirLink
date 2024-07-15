import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import productRoutes from './routes/productRoutes.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/products', productRoutes);

export default app;
