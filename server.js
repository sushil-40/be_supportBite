import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./src/config/dbConfig.js";

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

dbConnect();
app.get("/", (req, res) => {
  res.json({
    message: "Server is live!",
  });
});
app.listen(PORT, (error) =>
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`)
);
