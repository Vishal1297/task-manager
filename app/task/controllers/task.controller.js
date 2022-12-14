const db = require("../models/mongoose.js");
const Task = db.tasks;

exports.create = (req, res) => {
  /**
   * Validate request
   */

  if (req.body.uuid) {
    res.send({ data: null, status: 400, error: "Task update now allowed" });
    return;
  }

  if (!req.body.title) {
    res.send({ data: null, status: 400, error: "Task title is required" });
    return;
  }

  if (!req.body.type) {
    res.send({ data: null, status: 400, error: "Task type is required" });
    return;
  }

  /**
   * Create task
   */

  const task = new Task({
    uuid: req.body.uuid,
    title: req.body.title,
    type: req.body.type,
    description: req.body.description,
    createdAt: req.body.createdAt,
  });

  task
    .save(task)
    .then((data) => {
      res.send({ data: data, status: 200, error: null });
    })
    .catch((error) => {
      console.log("Error while save task, msg", error.message);
      res.send({
        data: null,
        status: 400,
        error: error.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.update = (req, res) => {
  /**
   * Validate request
   */

  if (!req.body.uuid) {
    res.send({ data: null, status: 400, error: "Task uuid is required" });
    return;
  }

  if (!req.body.title) {
    res.send({ data: null, status: 400, error: "Task title is required" });
    return;
  }

  if (!req.body.type) {
    res.send({ data: null, status: 400, error: "Task type is required" });
    return;
  }

  const uuid = req.body.uuid;

  /**
   * Update task
   */

  Task.findByIdAndUpdate(uuid, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.send({
          data: null,
          status: 400,
          error: `Task not found by id ${uuid}`,
        });
      } else {
        res.send({
          data: data,
          status: 400,
          error: null,
        });
      }
    })
    .catch((error) => {
      res.send({
        data: null,
        status: 400,
        error: `Error while updating task at uuid ${uuid}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Task.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.send({
          data: null,
          status: 200,
          error: `Cannot delete task with id ${id}. Maybe task was not found!`,
        });
      } else {
        res.send({
          data: data,
          status: 200,
          error: null,
        });
      }
    })
    .catch((err) => {
      res.send({
        data: null,
        status: 400,
        error: "Could not delete task with id " + id,
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Task.find(condition)
    .then((data) => {
      res.send({ data: data, status: 200, error: null });
    })
    .catch((err) => {
      res.send({
        data: null,
        status: 400,
        error: err.message || "Some error occurred while retrieving tasks.",
      });
    });
};


exports.deleteAll = (req, res) => {
  Task.deleteMany()
    .then((data) => {
      res.send({ data: data, status: 200, error: null });
    })
    .catch((err) => {
      res.send({
        data: null,
        status: 400,
        error: err.message || "Some error occurred while retrieving tasks.",
      });
    });
};
