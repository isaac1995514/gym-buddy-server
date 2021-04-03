import express from "express";
import { createExerciseLog_Post } from "../../controllers/exerciseLogController";

const router = express.Router();

/* Add a new user */
router.post("/", createExerciseLog_Post);

export default router;
