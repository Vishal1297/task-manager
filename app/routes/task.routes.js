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
 * Delete task
 */

router.delete("/task/:id", tasks.delete);

/**
 * Get all task
 */

router.get("/tasks", tasks.findAll);

/**
 * Delete all tasks
 */

router.delete("/tasks", tasks.deleteAll);

module.exports = router;