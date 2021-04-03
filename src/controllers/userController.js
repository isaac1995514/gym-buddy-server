import firebase from "firebase";
import firebaseDb from "../firebaseDb";
const firestore = firebaseDb.firestore();

/* Model */
import { User } from "../models/user";

export const createUser_Post = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const userDoc = await firestore.collection("users").doc(userId).get();

    if (userDoc.exists) throw "User Already exists";

    const data = req.body;
    const user = await firestore.collection("users").doc().set(data);
    res.send("User saved successfully", user);
  } catch (e) {
    next(e);
  }
};
