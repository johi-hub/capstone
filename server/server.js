const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = 8080;
const path = require("path");
const fs = require("fs");

const pathURL = "./data/memes.json";

app.use(express.json());
app.use(cors());
const botRoute = require("./routes/botroute");
app.use("/bot", botRoute);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const getWisdomAPI = async () => {
  return axios.get("https://zenquotes.io/api/random");
};

app.get("/api/wisdom", async (request, response) => {
  try {
    const resp = await getWisdomAPI();
    console.log(resp);
    response.json(resp.data[0].q);
  } catch (e) {
    console.log(e);
    response.status(500).send({ error: e.message });
  }
});

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const readFile = (pathURL) => {
  let data = fs.readFileSync(pathURL);
  return JSON.parse(data);
};

const memeData = readFile(pathURL);

console.log(memeData);

const newMeme = {
  name: "One Does Not Simply",
  id: "61579",
  box_count: 2,
  url: "https://i.imgflip.com/1bij.jpg",
};

memeData.data.memes.push(newMeme);

console.log("after push", memeData);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

io.on("connection", (socket) => {
  console.log("a user is connected", socket.id);

  socket.on("send message", function (msg) {
    io.emit("receive message", msg);
  });

  socket.on("disconnect", () => {
    console.log("...and disconnected");
  });
});

http.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
