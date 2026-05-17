const Project = require(
  "../models/Project"
);

/* Create Project */

const createProject = async (
  req,
  res
) => {

  try {

    const project =
      await Project.create({
        ...req.body,

        userId: req.user.id,
      });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

/* Get All Projects */

const getProjects = async (
  req,
  res
) => {

  try {

    const projects =
      await Project.find()
      .sort({
        createdAt: -1,
      });

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

/* Get User Projects */

const getUserProjects =
  async (req, res) => {

    try {

      const projects =
        await Project.find({
          userId: req.params.id,
        });

      res.json(projects);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
};

const completeProject =
  async (req, res) => {

    try {

      const project =
        await Project.findByIdAndUpdate(

          req.params.id,

          {
            isOngoing: false,

            endDate:
              new Date(),
          },

          { new: true }
        );

      res.json(project);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

module.exports = {
  createProject,
  getProjects,
  getUserProjects,
  completeProject,
};