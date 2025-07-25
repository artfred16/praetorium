import express from 'express';
import cors from 'cors';
import {connectDB} from './config/database.config';
import config from './config/config';
import apiRoutes from './routes/base-api.route';

const app = express();

await connectDB();

app.use(cors())
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', (req, res) => {
  res.send('Welcome to Praetorium API');
});
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});


export default app;