import express, { Request, Response } from 'express';
import todoListRoutes from './routes/todoListRoutes'
import publicContractRoutes from './routes/publicContractRoutes'
import dotenv from 'dotenv'
import { listenForTaskCreated } from './services/TodoListEventListener';
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());  // Middleware to parse JSON bodies
app.use('/api', todoListRoutes);
app.use('/api', publicContractRoutes);

//Listen for event 
listenForTaskCreated();

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('The web3 backend api is running ...');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
