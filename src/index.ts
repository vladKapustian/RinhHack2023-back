import express, { Request, Response } from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";

import User from "./models/user/user.model";
import Ticket from "./models/tickets/ticket.model";
import Message from "./models/messages/message.model";
import Participants from "./models/participants/participants.model";
import Room from "./models/rooms/room.model";

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const startServer = async () => {
  try {
    await User.sync({ force: true });
    await Ticket.sync({ force: true });
    await Room.sync({ force: true });
    await Participants.sync({ force: true });
    await Message.sync({ force: true });
  } catch (err) {
    console.error(err);
  }
};

startServer();

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
