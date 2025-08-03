const functions = require("firebase-functions");
const express = require('express') ;
const cors = require('cors') ;
const stripe = require("stripe")("s" + "k_t"+ "est_51L3nX" + "YSHob9ti035IWwPm6JjpHKVBO0si9efItZZtfmC53WhwanjT6lJiBDeR3AExZueFTzmi80Ls5MsKooLIpEG00Z9TJ4p4e");

// console.log('api key from firebase config is ', functions.config().stripe.secret_key) ;
// Api 

    // App config
const app = express() ;
    // middleware
app.use(cors({origin: true})) ;
app.use(express.json()) ;
    // api routes
app.get('/', (request, response) => response.status(200).send('back-end working')) ;

app.post('/payments/create',async (request, response) => {
    const total = request.query.total ;

    console.log('Payment Request Received, total=', total) ;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
        description: 'for order with total amount of '+ total,
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app) ;
//Example endpoint
// http://localhost:5001/clone-499a8/us-central1/api