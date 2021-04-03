// routes/index.js and users.js
import express from "express";
import { createUser_Post } from "../../controllers/userController";

const router = express.Router();

/* Add a new user */
router.post("/user", createUser_Post);

/* Add new exercise log */
// router.post("/user/:userId/exerciseLog", addExerciseLog);

export default router;
