import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('client/build'))
app.use(express.json());

mongoose.connect('mongodb+srv://yoelkraitman:Akiva2020@cluster0.vidf6.mongodb.net/conclusion-redux?retryWrites=true&w=majority')
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });

import reservationRoute from "./route/customerRoute";
app.use("/customer", reservationRoute)
// 

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


