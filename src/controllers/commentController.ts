import { Request, Response } from "express";
import restaurantModel, { Restaurant } from "../models/restaurantModel";

export const addComment = async (req: Request, res: Response) => {
  const restaurantId = req.params.id;
  const { date, comment } = req.body;

  try {
    const restaurant = await restaurantModel.findByIdAndUpdate(
      restaurantId,
      { $push: { comments: { date, comment } } },
      { new: true }
    );

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar el comentario" });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  const restaurantId = req.params.id;
  const commentId = req.params.commentId;
  const { date, comment } = req.body;

  try {
    const restaurant = await restaurantModel.findOneAndUpdate(
      { _id: restaurantId, "comments._id": commentId },
      { $set: { "comments.$.date": date, "comments.$.comment": comment } },
      { new: true }
    );

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el comentario" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const restaurantId = req.params.id;
  const commentId = req.params.commentId;

  try {
    const restaurant = await restaurantModel.findByIdAndUpdate(
      restaurantId,
      { $pull: { comments: { _id: commentId } } },
      { new: true }
    );
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el comentario" });
  }
};
