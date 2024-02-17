import dotenv from 'dotenv';
import express from 'express';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import { connectToMongoDb } from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();



const PORT = process.env.PORT;
app.use(express.json()); // This middleware will allow us to parse the incoming request body as JSON (from post req.body)
app.use(cookieParser());


// app.get('/', (req, res) => {
//     res.send(`Hello World! The server is running on port ${PORT}`);
// });


// Set up auth routes using middleware

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);













app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
});