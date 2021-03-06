// routes/index.js and users.js
import express from "express";
import { addUser } from "../../controllers/userController";

const router = express.Router();

/* Add a new user */
router.post("/user", addUser);

export default router;
