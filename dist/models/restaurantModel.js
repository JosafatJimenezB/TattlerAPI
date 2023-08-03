"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const commentSchema = new mongoose_1.default.Schema({
    date: Date,
    comment: String,
});
const restaurantSchema = new mongoose_1.default.Schema({
    name: String,
    cuisine: String,
    borough: String,
    address: {
        building: String,
        coord: [Number],
        street: String,
        zipcode: String,
    },
    grades: [
        {
            date: Date,
            score: Number,
        },
    ],
    comments: [
        {
            date: Date,
            comment: String,
        },
    ],
    restaurant_id: String,
});
exports.default = mongoose_1.default.model("Restaurant", restaurantSchema);
//# sourceMappingURL=restaurantModel.js.map