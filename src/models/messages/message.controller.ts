import { Request, Response } from "express";
import Room from "../rooms/room.model";

const findMessages = async (req: Request, res: Response) => {
  try {
    // const room = Room.findOne({ where: { TicketId: req.body.ticketId } });
  } catch (error) {}
};
// TODO: Добавить в интерфейсы внешние ключи, чтобы можно было искать данные по ним
