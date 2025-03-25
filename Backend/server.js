const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "Hello" });
});

app.get("/tasks", async (req, res) => {
    
});

app.post("/tasks", async (req, res) => {
    
});

app.put("/tasks/:id", async (req, res) => {
    
});

app.delete("/tasks/:id", async (req, res) => {
    
});

app.listen(3000 , () => {console.log("Listening to Port 3000")})
