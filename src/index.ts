import express, { Request, Response } from 'express'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.send('hello, Express is running !!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});