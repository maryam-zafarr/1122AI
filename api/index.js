const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require('body-parser');
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

//routes
const userRoute = require("./routes/user");
const caseRoute = require("./routes/case");
const serviceRoute = require("./routes/service");



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
app.use("/api/services", serviceRoute);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5000, () => {
    console.log("Backend server is running!");
});

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: 'whatsapp:'+ process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  });
