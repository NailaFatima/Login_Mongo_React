const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Environment variables
const { DB_URL, SECRET_KEY } = process.env;

// ✅ Safe DB connection
mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });

// Routes
app.use('/api/users', userRoutes);
app.use('/auth', authRoute);

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'user logged out successfully' });
});

// ✅ Correct error-handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error('❌ Server Error:', message);
    res.status(statusCode).json({ status: statusCode, message });
});

// ✅ Required for Vercel serverless
module.exports = app;
