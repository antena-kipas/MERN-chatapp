import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

//express and server http
const app = express();
const server = http.createServer(app);

//middleware
app.use(express.json({limit: "4mb"}));
app.use(cors());

//route set up
app.use("/api/status", (req, res)=> res.send("Server is live"));
app.use("/api/auth", userRouter);


//connect database
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT,  ()=> console.log("Server is running on PORT:" + PORT));


