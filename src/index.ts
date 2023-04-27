import express, { Request, Response } from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./models/";
import { Server } from "socket.io";

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
