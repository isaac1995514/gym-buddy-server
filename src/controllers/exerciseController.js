import firebase from "firebase";
import firebaseDb from "../firebaseDb";

const firestore = firebaseDb.firestore();
import Exercise, { exerciseConvertor } from "../models/exercise";

/**
 * Get a list of exercise
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const allExercise_Get = async (req, res, next) => {
  const exerciseCollectionRef = firestore.collection("exercise");

  // Filter by
  // 1. Muscle Category
  // 2. Muscle
};

/**
 * Create a new exercise
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const createExercise_Post = async (req, res, next) => {
  const { name, category, muscles } = req.body;

  try {
    const exerciseCollectionRef = firestore.collection("exercise");

    // Check if the exercise with the same name exis
    const exercise = await exerciseCollectionRef.doc(name).get();

    if (exercise.exists) throw "Exercise already exists";

    await firestore
      .collection("exercise")
      .doc(name)
      .withConverter(exerciseConvertor)
      .set(new Exercise(name, category, muscles));

    const resMessage = `Exercise ${name} created`;
    console.log(resMessage);
    res.status(201).send(resMessage);
  } catch (e) {
    next(e);
  }
};

/**
 * Delete an existing exercise
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const deleteExercise_Delete = async (req, res, next) => {
  const { exerciseName } = req.params;

  try {
    await firestore.collection("exercise").doc(exerciseName).delete();

    const resMessage = `Exercise ${exerciseName} removed`;
    console.log(resMessage);
    res.status(204).send(resMessage);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

/**
 * Create a new exercise
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const updateExercise_Post = async (req, res, next) => {
  const { name, category, muscles } = req.body;

  try {
    const exerciseCollectionRef = firestore.collection("exercise");

    // Check if the exercise with the same name exis
    const exerciseSnapshot = await exerciseCollectionRef
      .doc(name)
      .withConverter(exerciseConvertor)
      .get();

    if (!exerciseSnapshot.exists) throw "Exercise already exists";

    const exercise = exerciseSnapshot.data();

    // Update category and muscles list
    exercise.category(category);
    exercise.muscles(muscles);

    await firestore
      .collection("exercise")
      .doc(name)
      .withConverter(exerciseConvertor)
      .update(exercise);

    const resMessage = `Exercise ${name} updated`;
    console.log(resMessage);
    res.status(201).send(resMessage);
  } catch (e) {
    next(e);
  }
};
