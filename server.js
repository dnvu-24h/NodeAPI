import express from 'express';
import routes from './api/router';
import Qroutes from './api/Qrouter';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
routes(app);
Qroutes(app);
app.listen(process.env.PORT)
console.log('app running on port ', process.env.PORT);