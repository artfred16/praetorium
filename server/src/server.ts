import express from 'express';
import cors from 'cors';
import {connectDB} from './config/database.config.ts';
import config from './config/config.ts';
import apiRoutes from './routes/base-api.route.ts';

const app = express();

connectDB();

app.use(cors())
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
