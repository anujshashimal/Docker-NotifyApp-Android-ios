var admin = require("firebase-admin");
var serviceAccount = require("./zerobugs-myKey");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://zerobugs-277520.firebaseio.com"
});
