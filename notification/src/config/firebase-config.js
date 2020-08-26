var admin = require("firebase-admin");
var serviceAccount = require("./zerobugs-myKey");
const  {FIREBASE_DATABASE_URL}  = process.env;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL
});
