import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bootcamps from './routes/bootcamps.js';

// Load env vars
dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Connect to database
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log('DB ERROR => ', err));

// Mount routers
app.get('/', (request, response) => {
  //console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/api/v1/bootcamps', bootcamps);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
