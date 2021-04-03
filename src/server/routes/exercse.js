import express from "express";
import {
  createExercise_Post,
  deleteExercise_Delete,
} from "../../controllers/exerciseController";

const router = express.Router();

router.post("/", createExercise_Post);

router.delete("/:exerciseName", deleteExercise_Delete);

export default router;
