import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import cors from "cors";
import bodyParser from "body-parser";

var app = express();

app.use(express.json());
app.use(cors());
app.user(bodyParser.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
export default app;
