const express = require(
  "express"
);

const router =
  express.Router();

const verifyToken = require(
  "../middleware/authMiddleware"
);

const {
  createProject,
  getProjects,
  getUserProjects,
} = require(
  "../controllers/projectController"
);

router.get(
  "/",
  getProjects
);

router.get(
  "/user/:id",
  getUserProjects
);

router.post(
  "/",
  verifyToken,
  createProject
);

module.exports = router;