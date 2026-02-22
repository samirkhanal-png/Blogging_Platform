import express from "express";
import {
  postCommentBySlug,
  getCommentBySlug
} from "../controllers/comments.js";

import jwtCheck from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:slug/comments", jwtCheck, postCommentBySlug);

router.get("/:slug/comments", getCommentBySlug);

export default router;