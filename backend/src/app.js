import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cors middleware
app.use(
   cors({
      origin: process.env.ORIGIN_URL === '*' ? true : process.env.ORIGIN_URL,
      credentials: true,
   })
);

// json limit middleware
app.use(express.json({ limit: "16kb" }));
// url encoded middleware
app.use(express.urlencoded({ extended: true }));
// public assets middleware
app.use(express.static("public"));
// cookie parser middleware
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import adminRouter from "./routes/admin.routes.js";


// route declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/admin", adminRouter)


// http://localhost:8000/api/v1/users/register

export { app };
