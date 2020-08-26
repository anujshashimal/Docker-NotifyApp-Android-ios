const { FIREBASE_DATABASE_URL } = process.env;
const express = require('express');
const {notification} = require('./routes');
const app = express();
const bodyparser =  require('body-parser');
const admin = require("firebase-admin");
const serviceAccount = require("../zerobugs-myKey"); //Generate from particular account
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL
});

app.use(notification);

app.listen(port, () =>{
    console.log(`app listening at http://localhost:${port}`)
});

module.exports = app;
