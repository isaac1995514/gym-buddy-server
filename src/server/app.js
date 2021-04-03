import express from "express";
import path from "path";

/* Middleware */
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import cookieParser from "cookie-parser";

/* Routes */
import indexRouter from "./routes/index";
import usersRouter from "./routes/user";
import exerciseRouter from "./routes/exercse";
import exerciseLogRouter from "./routes/exerciseLog";

var app = express();

/* Default view engine */
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/exercise", exerciseRouter);
app.use("/exerciseLog", exerciseLogRouter);

console.log("Server started.......");

export default app;
