import express from "express";
import * as commentController from '../controllers/commentController'

const router = express.Router()

router.post('/restaurants/:id/comments', commentController.addComment);
router.put('/restaurants/:id/comments/:commentId', commentController.updateComment);
router.delete('/restaurants/:id/comments/:commentId', commentController.deleteComment);

export default router;