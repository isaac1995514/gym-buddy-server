import express from "express";
import path from "path";

/* Middleware */
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import cookieParser from "cookie-parser";

/* Routes */
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

var app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/api", usersRouter);

console.log("Server started.......");

export default app;
