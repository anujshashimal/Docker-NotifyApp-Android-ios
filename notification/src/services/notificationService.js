const admin = require('firebase-admin');


const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

const notificationConfig = async (token,payload)=>{
    try{
    await admin.messaging().sendToDevice(token, payload, notification_options)
        .catch(error => {
            console.log(error);
        });
    }catch (e) {
        console.log('Notification Error', e)
    }
};

module.exports ={
    notificationConfig
};
