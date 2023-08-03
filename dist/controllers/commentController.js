"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.addComment = void 0;
const restaurantModel_1 = __importDefault(require("../models/restaurantModel"));
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantId = req.params.id;
    const { date, comment } = req.body;
    try {
        const restaurant = yield restaurantModel_1.default.findByIdAndUpdate(restaurantId, { $push: { comments: { date, comment } } }, { new: true });
        res.json(restaurant);
    }
    catch (error) {
        res.status(500).json({ message: "Error al agregar el comentario" });
    }
});
exports.addComment = addComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantId = req.params.id;
    const commentId = req.params.commentId;
    const { date, comment } = req.body;
    try {
        const restaurant = yield restaurantModel_1.default.findOneAndUpdate({ _id: restaurantId, "comments._id": commentId }, { $set: { "comments.$.date": date, "comments.$.comment": comment } }, { new: true });
        res.json(restaurant);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el comentario" });
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantId = req.params.id;
    const commentId = req.params.commentId;
    try {
        const restaurant = yield restaurantModel_1.default.findByIdAndUpdate(restaurantId, { $pull: { comments: { _id: commentId } } }, { new: true });
        res.json(restaurant);
    }
    catch (error) {
        res.status(500).json({ error: "Error al eliminar el comentario" });
    }
});
exports.deleteComment = deleteComment;
//# sourceMappingURL=commentController.js.map