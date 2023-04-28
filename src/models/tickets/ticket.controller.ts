import Ticket from "./ticket.model";
import { Request, Response } from "express";

const createTicket = async (req: Request, res: Response) => {
  try {
    await Ticket.create(req.body);
    res.status(200).send("Ticket created succesfully");
  } catch (error) {
    res.status(500).send("Failed to create ticket");
  }
};

const fetchAllTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.findAll();

    if (tickets) {
      res.status(200).send(tickets);
    }
  } catch (error) {}
};

const changeTicketPriority = async (req: Request, res: Response) => {
  try {
    await Ticket.update(
      { priority: req.body.priority },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteTicket = async (req: Request, res: Response) => {
  try {
    await Ticket.destroy({
      where: {
        id: req.body.id,
      },
    });
  } catch (error) {}
};
