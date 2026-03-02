import Task from "../models/task.model.js";


// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// GET ALL TASKS
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET SINGLE TASK
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE TASK
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// DELETE TASK
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};