const db = require("../models/mongoose.js");
const Task = db.tasks;

exports.create = (req, res) => {
  /**
   * Validate request
   */

  /**
   * Create
   */
};

exports.update = (req, res) => {
  /**
   * Validate request
   */
  
  /**
   * Create
   */
};

exports.delete = (req, res) => {
  /**
   * Validate request
   */

  /**
   * Delete
   */
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Task.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks.",
      });
    });
};
