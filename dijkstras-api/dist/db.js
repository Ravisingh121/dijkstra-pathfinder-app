"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb+srv://ravisingh09:ravisingh0509@cluster0.6vims.mongodb.net/cityDB';
mongoose_1.default.connect(MONGO_URI, {});
const db = mongoose_1.default.connection;
db.on("connected", () => {
    console.log("✅ Connected to MongoDB successfully!");
});
db.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
});
exports.default = db;
//# sourceMappingURL=db.js.map