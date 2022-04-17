import express from "express";
import cors from "cors";
import shopRouter from "./routes/shopsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import basketsRouter from "./routes/basketsRoutes.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/shops", shopRouter);
app.use("/api/users", userRouter);
app.use("/api/contact", contactRouter);
app.use("/api/baskets", basketsRouter);

export default app;
