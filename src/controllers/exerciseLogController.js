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
export const createExerciseLog_Post = async (req, res, next) => {
  try {
    // Get User Id from Http Header
    const userId = req.header("userId");

    // Check if user Id is provided
    if (!userId) throw "UserId is required";

    const userDocRef = await firestore.collection("users").doc(`${userId}`);

    const userDoc = await userDocRef.get();

    // Check if target user exists
    if (!userDoc.exists) throw "User does not exists";

    const exerciseLog = req.body;

    // Add a new Exercise Log to the user's exerciseLog Collection
    await userDocRef.collection("exerciseLog").doc().set(exerciseLog);

    res.send("Exercise Log Saved Successfully");
  } catch (e) {
    console.error(e);
    // Handle by default error handler
    next(e);
  }
};

/**
 * Update an existing exercise log
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const updateExerciseLog_Post = async (req, res, next) => {};
