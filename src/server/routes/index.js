import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Gym Body Server", message: "Express Server" });
});

export default router;
