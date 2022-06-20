const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LBDqxSCd4caZ2h1nOSBvKB57JeewjvRSLJ3Zq7JlsXsYHRtZ7zfXAldRMd8hr0i8nz4kyLEfaYaLokAZbv68B8j00lYssvkH7"
);

//api

//app config
const app = express();

//middleware  //for security
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  console.log("request received for the amount>>>>>>", paymentIntent.amount);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-442b2/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
