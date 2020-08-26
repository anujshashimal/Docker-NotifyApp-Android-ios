const express = require('express');
const routers = express.Router();
const notificationService = require('../services/notificationService');

routers.post('/firebase/notification', async (req, res, next)=> {
    const {registrationToken, payload}= req.body;
    try{
        await notificationService.notificationConfig(registrationToken,payload)
            .then(response => {
            res.status(200).send("Notification sent successfully!!!");
        })
            .catch(error => {
                console.log(error);
            });
    }catch (e) {
        console.log('Notification Error: ',e);
        res.status = 400;
    }
    res.send()
});

module.exports = routers;
