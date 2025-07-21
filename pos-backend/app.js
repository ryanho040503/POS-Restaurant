require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const createHttpError = require('http-errors');
const app = express();

const PORT = process.env.PORT;
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Root Endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the POS system backend server!" });
});

// Other end points 
app.use('/api/user', require('./routes/userRoute'));

//Goblal Error Handler
app.use(globalErrorHandler)

// Start the server 
app.listen(PORT, () => {
    console.log(`✅ POS Server is running on port ${PORT}`);
})



