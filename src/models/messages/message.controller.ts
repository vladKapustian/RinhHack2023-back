import { Request, Response } from "express";
import Room from "../rooms/room.model";
import Participants from "../participants/participants.model";

const findMessages = async (req: Request, res: Response) => {
  try {
    const room = await Room.findByPk(req.body.roomId)
    const participants = await Participants.findOne({where:{id:room.}});
  } catch (error) {}
};
// TODO: Добавить в интерфейсы внешние ключи, чтобы можно было искать данные по ним
