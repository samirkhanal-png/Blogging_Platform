import Blog from "../models/Blog.js";

export const increaseViewCount = async (req, res, next) => {
  const { slug } = req.params;
  const shouldIncrease = req.query.view === "true";

  if (shouldIncrease) {
    try {
      await Blog.findOneAndUpdate(
        { slug },
        { $inc: { viewCount: 1 } }
      );
    } catch (error) {
      console.error("View count error:", error);
    }
  }

  next();
};