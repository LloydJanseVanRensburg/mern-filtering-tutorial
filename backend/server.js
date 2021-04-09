require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/bootcamps", require("./routes/bootcampRoutes"));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
