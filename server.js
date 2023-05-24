const express = require('express')
const app = express();
const PORT = 5000
const userRoute = require('./Routes/userRoutes')
const errorHandler = require('./Middlewares/errorHandler.middleware').errorHandler;

app.use("/api", userRoute)

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server is running")
})