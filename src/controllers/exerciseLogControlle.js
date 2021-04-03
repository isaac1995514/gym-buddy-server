import firebase from "firebase";
import firebaseDb from "../firebaseDb";

const firestore = firebaseDb.firestore();

/**
 * Get a list of exercise log
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const exerciseLogList_Get = async (req, res, next) => {};

/**
 * Create a new exercise log
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const creatExerciseLog_Post = async (req, res, next) => {
  const { userId } = req.params;

  const userRef = await firestore.collection("users").doc(`${userId}`);

  const exerciseLog = req.body;

  try {
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) res.status(400).send(e.message);

    await userRef.update({
      logs: firebase.firestore.FieldValue.arrayUnion(exerciseLog),
    });
    res.send("Exercise Log Saved Successfully");
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

/**
 * Update an existing exercise log
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const updateExerciseLog_Post = async (req, res, next) => {};
