import { Request, Response } from "express";
import User from "./user.model";

const authenticateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });

    if (user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(404).send("Invalid username of password");
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    await User.create(req.body);
    res.status(200).send("User created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

export { authenticateUser, createUser };
