import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import projectRoutes from './routes/projectRoutes.js'
import articleRoutes from './routes/articleRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/projectlist', projectRoutes);
app.use('/api/v1/articlelist', articleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from portfolio server!',
    });
});

const startServer = async () => {
    try {
        const port = 5173;
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log('Server started on port ', port));


    } catch (error) {
        console.log(error);
    }
};

startServer();