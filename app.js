const mongoose = require('mongoose');
require('dotenv').config();


const express = require('express');
const app = express();
const connectDB =require('./Config/db')


const userRoutes = require('./Routes/UserRoute');




app.use(express.json());
app.use(userRoutes);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Server running on port ${port}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    // logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})









const port = process.env.PORT || 2000;
connectDB();
