import express from "express";
import {
  getBlogs,
  getBlogForSlug,
  postBlogs,
  putBlogs,
  patchPublishBlog,
  toggleLikeBlog,
  thumbLikeBlog
} from "../controllers/blog.js";

import jwtCheck from "../middleware/authMiddleware.js";
import { increaseViewCount } from "../middleware/viewMiddleware.js";

const router = express.Router();

router.get("/", getBlogs);

router.get("/:slug", increaseViewCount, getBlogForSlug);

router.post("/", jwtCheck, postBlogs);

router.put("/:slug", jwtCheck, putBlogs);

router.patch("/:slug/publish", jwtCheck, patchPublishBlog);

router.post("/:slug/like", jwtCheck, toggleLikeBlog);

router.post("/:slug/thumb-like", jwtCheck, thumbLikeBlog);

export default router;