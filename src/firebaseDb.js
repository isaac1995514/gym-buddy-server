import firebase from "firebase";

const config = require("./firebaseConfig.json");

const firebaseDb = firebase.initializeApp(config);

export default firebaseDb;
