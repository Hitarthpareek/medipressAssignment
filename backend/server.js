const express = require("express");

const cors = require("cors");

const path = require("path");

require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const taskRoutes = require("./routes/taskRoutes");

const employeeRoutes = require("./routes/employeeRoutes");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

/* Middleware */

app.use(cors());

app.use(express.json());

/* Database */

connectDB();

/* APIs */

app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/projects", projectRoutes);

app.use(
  "/api/tasks",
  taskRoutes
);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/* Frontend */

const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
