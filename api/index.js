const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//routes
const userRoute = require("./routes/user");
const caseRoute = require("./routes/case");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => 
        console.log("DB Connection is successful")
    )
    .catch((err) => {
        console.log(err)
    });

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/cases", caseRoute);

app.listen(5000, () => {
    console.log("Backend server is running!");
});