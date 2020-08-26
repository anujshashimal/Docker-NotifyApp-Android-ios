var bodyparser =  require('body-parser');
var express = require('express');
var admin = require("firebase-admin");
var serviceAccount = require("./zerobugs-myKey");

const app = express();
app.use(bodyparser.json());

const port = 3000;

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://zerobugs-277520.firebaseio.com"
});

app.post('/firebase/notification', (req, res)=> {
    const token = req.body.registrationToken;
    const payload = req.body.payload;

    admin.messaging().sendToDevice(token, payload, notification_options)
        .then(response => {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () =>{
    console.log("listening to port"+port)
});

