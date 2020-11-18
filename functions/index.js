const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_1Ao6CFdYPEz9XxKAp14Wivyn");

//App config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (request, response) => response.status(200).send("hellow"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment done", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//List command
exports.api = functions.https.onRequest(app);
