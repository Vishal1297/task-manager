module.exports = (app) => {
  const tasks = require("../controllers/task.controller");

  const router = require("express").Router();

  /**
   * Create new task
   */

  router.post("/task", tasks.create);

  /**
   * Update task
   */

  router.put("/task", tasks.update);
  

  /**
   * Get all task
   */

  router.get("/tasks", tasks.findAll);


};
