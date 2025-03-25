const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { taskModel } = require("./models/taskModel");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "Hello" });
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.json(tasks);
    } 
    
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const { id, title, description } = req.body;
        const newTask = new taskModel({ id, title, description });
        await newTask.save();
        res.status(201).json({ msg: "Task Created", task: newTask });
    } 
    
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedTask = await taskModel.findOneAndUpdate({ id }, updateData, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json({ msg: "Task Updated", updatedTask });
    } 
    
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await taskModel.findOneAndDelete({ id: req.params.id });
        if (!deletedTask) return res.status(404).json({ error: "Task not found" });
        res.json({ msg: "Task Deleted", deletedTask });
    } 
    
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
        app.listen(3000, () => console.log("Listening on Port 3000"));
    } catch (e) {
        console.log("Error in connecting", e);
    }
}

start();
