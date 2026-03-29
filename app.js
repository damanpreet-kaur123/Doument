import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routers/router.js';

dotenv.config();

const app = express();

app.use(express.json());

if(process.env.MONGO_URI) {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.error(err));
}

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
