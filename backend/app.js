const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(cors({
  origin: ['https://resellersprint.com',],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

// const buildPath = path.join(__dirname, "build"); // Adjust the path

// app.use(express.static(buildPath));

// // Route all requests to React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(buildPath, "index.html"));
// });

// const buildPath = path.join(__dirname, "../frontend/build");

// app.use(express.static(buildPath));

// // Route all requests to React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.get('*', (req, res) => {
  res.redirect('https://resellersprint.com'); // Replace with your actual cPanel domain
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
// const admin = require("./controller/admin");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");

app.use("/api/v2/user", user);
// app.use("/api/v2/admin", admin);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
