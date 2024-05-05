import express from "express";

import users from "./users.json" with { type: "json" };

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

//Without first parameter affects all
app.use("/users", (req, res, next) => {
    console.log("Middleware for users request");
    next();
})

app.use(express.json())

app.get("/users", (req, res) => {
    let completed = req.query.completed;

    if (completed === undefined) return res.status(200).json(users);

    let filterUsers = users.filter(x => x.completed === Boolean(completed));

    res.status(200).json(filterUsers);
})

app.get("/users/:id",(req, res) => {

    let user = users.find(x => x.id === Number(req.params.id));
    if (!user) return res.status(404).json({"message": "No user found."});


    res.status(200).json(user);
})

app.post("/data", (req, res) => {
    let body = req.body;

    res.status(201).json(body);
})

app.use((req, res) => {
    res.status(404).json({"error": "Not Found"});
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});