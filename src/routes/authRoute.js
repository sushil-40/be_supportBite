import express from "express";
import { insertNewUser } from "../controllers/authController.js";

const router = express.Router();

// user registration

router.post("/register", insertNewUser);

export default router;
