const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const CookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');

const app = express();
app.use(CookieParser());

dotenv.config();

const {PORT, DB_USER, DB_PASSWORD, DB_URL, SECRET_KEY} = process.env
const port = PORT;
const dbURL = DB_URL
//const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.avqxm6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURL).then((connection)=>{
     //console.log('db is connected', connection);
     console.log('db is connected');
});

app.use(cors());
app.use(express.json());

// mouting the routes
app.use('/api/users', userRoutes);
app.use('/auth', authRoute);



const protectRouteMiddleware = (req, res, next) =>{
    try{
        const { token } = req.cookies;
        const decodedToken = jwt.verify(token, SECRET_KEY);
        if(decodedToken){
            const userId = decodedToken.id;
            req.userId = userId;
            next();
        } 
    } catch(error){
        next(error);
    }
}

app.get('/logout', (req, res)=> {
    res.clearCookie('token');
    res.status(200).json({
        message: 'user logged out successfully'
    })
})

app.use((err,res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: statusCode,
        message: message
    });
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
});