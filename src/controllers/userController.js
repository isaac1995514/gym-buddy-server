import firebase from "firebase";
import firebaseDb from "../firebaseDb";
import User from "../models/user";

const firestore = firebaseDb.firestore();

export const addUser = async (req, res, next) => {
  await firestore.collection("users").doc().set;

  try {
    const data = req.body;
    const user = await firestore.collection("users").doc().set(data);
    res.send("User saved successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const 
