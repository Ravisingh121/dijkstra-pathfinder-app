import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://ravisingh09:ravisingh0509@cluster0.6vims.mongodb.net/cityDB';

mongoose.connect(MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("✅ Connected to MongoDB successfully!");
});

db.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
});

export default db;
