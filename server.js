const express =require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const signInRoutes = require('./routes/signIn.js');

dotenv.config();
const cors = require('cors');
 // Enable CORS


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/signin', signInRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


