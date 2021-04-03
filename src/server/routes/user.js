// routes/index.js and users.js
import express from "express";
import { createUser_Post } from "../../controllers/userController";

const router = express.Router();

/* Add a new user */
router.post("/:userId", createUser_Post);

export default router;
