import express from "express";
import cors from "cors";
import { dbConnect } from "./src/config/dbConfig.js";

import authRoute from "./src/routes/authRoute.js";
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.get("/", (req, res) => {
  res.json({
    statu: "success",
    message: "Server is live!",
  });
});

dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log(`Your server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
