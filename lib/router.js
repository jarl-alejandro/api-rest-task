'use strict'

const express = require("express")
const Tasks = require("../api/tasks")

const router = express.Router()

const tasks = new Tasks()

router.get("/tasks", tasks.get_task)
router.get("/tasks/:id", tasks.get_task_id)
router.post("/tasks", tasks.post_task)
router.put("/tasks/:id", tasks.put_task_id)
router.delete("/tasks/:id", tasks.delete_task_id)

module.exports = router 