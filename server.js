const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require("mongoose");
const connectDB = require("./config/database");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use("/api/v1/test", require("./routes/testRoutes"));

//port
const PORT=process.env.PORT || 3030;

//listen
app.listen(PORT,()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`.bgBlue.white);
})