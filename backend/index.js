const express= require('express');
const connectDB = require('./db');
const cors = require('cors');
const auth = require('./routes/auth');
const product = require('./routes/product');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = 3000;

// Connect to MongoDB
connectDB();
// Middleware to parse JSON requests
app.use(express.json());

app.use(cors({
  origin: "https://urban-lux.vercel.app", // your frontend's port
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/users', auth);
app.use('/products', product);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
