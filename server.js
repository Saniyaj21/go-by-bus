import express from 'express';
import 'dotenv/config';
import { connectDB } from './db/connect.js';

// routes
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import busRouter from './routes/busRoute.js'
import scheduleRouter from './routes/scheduleRoute.js'
import feedbackRouter from './routes/feedbackRoute.js'

const server = express();

server.use(express.json());
connectDB()

// API routes
server.use('/api/user', userRouter);
server.use('/api/auth', authRouter);
server.use('/api/bus', busRouter);
server.use('/api/schedule', scheduleRouter);
server.use('/api/feedback', feedbackRouter);

server.get('/', (req, res) => {
    res.send('Server is healthy, Last update user profile update.');
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
