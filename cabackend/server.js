import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.routes.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT;


console.log(PORT);


app.get('/', (req, res) => {
    res.send(`Hello World! The server is running on port ${PORT}`);
});


// Set up auth routes using middleware

app.use('/api/auth', authRoutes);












app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});