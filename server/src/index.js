// Load our .env variables
import dotenv from "dotenv";
import express from "express";
dotenv.config();

import app from "./app.js";
import connectDB from "./db/connectDB.js";
// import testRouter from "./testRouter.js";

// The environment should set the port
const port = process.env.PORT;

const startServer = async () => {
  await connectDB();
  app.listen(port);
};

/****** Host our client code for Heroku *****/
/**
 * We only want to host our client code when in production mode as we then want to use the production build that is built in the dist folder.
 * When not in production, don't host the files, but the development version of the app can connect to the backend itself.
 */
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(new URL("../../client/dist", import.meta.url).pathname)
  );
  // Redirect * requests to give the client data
  app.get("*", (req, res) =>
    res.sendFile(
      new URL("../../client/dist/index.html", import.meta.url).pathname
    )
  );
}

/****** For cypress we want to provide an endpoint to seed our data ******/
// if (process.env.NODE_ENV !== "production") {
//   app.use("/api/test", testRouter);
// }

// Start the server
startServer();
