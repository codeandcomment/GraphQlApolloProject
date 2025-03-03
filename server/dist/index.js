import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.json({ "ststus": 200, "message": "App is up" });
});
app.listen(PORT, () => {
    console.log('Server is up on', PORT);
});
