import express from "express";
import "dotenv/config";
import appoloServer from "./config/apolloServer.js";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
    return res.json({ "status": 200, "message": "App is up" });
});
const startApolloServer = async () => {
    await appoloServer.start();
    app.use("/graphql", expressMiddleware(appoloServer));
};
startApolloServer();
app.listen(PORT, () => {
    console.log('Server is up on', PORT);
});
