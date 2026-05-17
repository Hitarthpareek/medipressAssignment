const express = require("express");

const router = express.Router();

const verifyToken = require(
  "../middleware/authMiddleware"
);

const {
  getEmployees,
  createEmployee,
} = require(
  "../controllers/employeeController"
);

router.get(
  "/",
  verifyToken,
  getEmployees
);

router.post(
  "/",
  verifyToken,
  createEmployee
);

module.exports = router;