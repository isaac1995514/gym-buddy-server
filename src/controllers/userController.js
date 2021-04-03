import firebase from "firebase";
import firebaseDb from "../firebaseDb";

const firestore = firebaseDb.firestore();

export const createUser_Post = async (req, res, next) => {
  await firestore.collection("users").doc().set;

  try {
    const data = req.body;
    const user = await firestore.collection("users").doc().set(data);
    res.send("User saved successfully", user);
  } catch (e) {
    next(e);
  }
};
