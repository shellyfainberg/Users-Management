const userBL = require("../BLL/userBL");
const taskBL = require("../BLL/taskBL");
const postBL =require ("../BLL/postBL")
const express = require("express");

const router = express.Router();

//Get all users
router.get("/", async (req, resp) => {
  let users = await userBL.getAllUsers();
  return resp.json(users);
});
// Get User By ID
router.get("/:id", async (req, res) => {
  const { id } = req.params; // Destructuring
  const user = await userBL.getUserById(id);
  res.json(user);
});

//Get all user tasks
router.get("/:id/tasks", async (req, resp) => {
  const { id } = req.params; // Destructuring
  let tasks = await taskBL.getAllTasks(id);
  return resp.json(tasks);
});

// Get Task By ID from user id
// router.get("/:id/tasks/:taskId", async (req, resp) => {
//   const { id } = req.params; // Destructuring
//   const { taskId } = req.params; // Destructuring

//   console.log("taskId", taskId);
//   const task = await taskBL.getTaskById(id, taskId);
//   console.log("from route", task);
//   return resp.json(task);
// });

// Update a task - to completed
router.put("/:id/tasks/:taskId", async (req, resp) => {
  const { id } = req.params;
  const { taskId } = req.params;

  const obj = req.body;
  const result = await taskBL.updateTask(id, taskId, obj);
  return resp.json(result);
});

// Add a new user
router.post("/",async (req, res) => {
  try {
    const obj = req.body;
    const result = await userBL.addUser(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message); // status 500 - Internal Server Error
  }
});
//Add a new Task
router.post("/:id",async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const result = await taskBL.addTask(id, obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message); // status 500 - Internal Server Error
  }
});

//Add a new Post
router.post("/:id/post",async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const result = await postBL.addPost(id, obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message); // status 500 - Internal Server Error
  }
});



// Update a user
router.put("/:id", async (req, resp) => {
  const { id } = req.params;
  const obj = req.body;
  const result = await userBL.updateUser(id, obj);
  return resp.json(result);
});

// Delete a user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await userBL.deleteUser(id);
  return res.json(result);
});

// Delete a task
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const result = await taskBL.deleteTask(id,taskId);
//   return res.json(result);
// });

module.exports = router;
