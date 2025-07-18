require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const createHttpError = require('http-errors');
const app = express();

const PORT = process.env.PORT;
connectDB();

// Root Endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the POS system backend server!" });
});

//Goblal Error Handler
app.use(globalErrorHandler)

// Start the server 
app.listen(PORT, () => {
    console.log(`✅ POS Server is running on port ${PORT}`);
})



