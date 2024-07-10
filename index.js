const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


const userRouter = require('./routes/user');

app.listen(port, () => {
	console.log("Sever is listening on port 4000")
})

app.use('/user', userRouter);


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const { resolve } = require("path");

// // Replace if using a different env file or config
// const env = require("dotenv").config({ path: "./.env" });


// (process.env.STRIPE_SECRET_KEY); // Import Stripe package

// const app = express();
// const port = process.env.PORT || 5252;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// });

// const userRouter = require('./routes/user');

// app.use('/user', userRouter);

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-08-01",
// });

// app.use(express.static(process.env.STATIC_DIR));

// app.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/index.html");
//   res.sendFile(path);
// });

// app.get("/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });

// app.post("/create-payment-intent", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       currency: "EUR",
//       amount: 100,
//       automatic_payment_methods: { enabled: true },
//     });

//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (e) {
//     return res.status(400).send({
//       error: {
//         message: e.message,
//       },
//     });
//   }
// });



// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });