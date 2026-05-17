const Task =
  require("../models/Task");

/* GET TASKS */

const getTasks = async (
  req,
  res
) => {
  try {

    const tasks =
      await Task.find({
        userId: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      tasks,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* CREATE TASK */

const createTask = async (
  req,
  res
) => {
  try {

    const {
      title,
      description,
    } = req.body;

    const task =
      await Task.create({
        userId: req.user.id,
        title,
        description,
      });

    res.status(201).json({
      success: true,
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* UPDATE TASK */

const updateTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {

      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    if (
      task.userId.toString() !==
      req.user.id
    ) {

      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    task.title =
      req.body.title ||
      task.title;

    task.description =
      req.body.description ||
      task.description;

if (req.body.status) {
  if (["pending", "completed"].includes(req.body.status)) {
    task.status = req.body.status;
  }
}

    await task.save();

    res.status(200).json({
      success: true,
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* DELETE TASK */

const deleteTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {

      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    if (
      task.userId.toString() !==
      req.user.id
    ) {

      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Task deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};