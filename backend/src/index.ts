import express, { Request, Response } from 'express';
import todoListRoutes  from './routes/todoListRoutes'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Middleware to parse JSON bodies
app.use('/api', todoListRoutes);  // Use todoList routes

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('The web3 backend api is running ...');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
