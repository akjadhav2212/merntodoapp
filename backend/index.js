//write basi express boilerplate code

const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo } = require("./types");
const app = express();
const { todo } = require("./db.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
  return;
});

app.put("/completed", async (req, res) => {
  const payload = req.body;
  const parsedpayload = createTodo.safeParse(payload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you sent wrong",
    });
    return;
  }
  //put in mongodb
  await todo.update(
    {
      __id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo updated",
  });
});

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const parsedpayload = createTodo.safeParse(payload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you sent wrong",
    });
    return;
  }
  //put in mongodb
  await todo.create({
    title: payload.title,
    description: payload.description,
  });
  res.json({
    msg: "Todo created",
  });
});
app.delete("/todo", async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    await todo.deleteOne({
      _id: id,
    });
    return res.send(200);
  } catch (e) {
    return res.send(403);
  }
});
app.listen(3000);
