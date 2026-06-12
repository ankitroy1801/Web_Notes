import express from "express";
import notesroute from "./routes/notesroute.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import Ratelimiter from "./middleware/ratelimiter.js";
import cors from "cors";

dotenv.config();

const app=express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use((req,res,next)=> {
console.log(`We just got a ${req.method} request`);
next();
});

app.use (
    cors({
        origin:"http://localhost:5173",
    })
)

//middleware
app.use(Ratelimiter)
app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.use("/api/notes", notesroute);
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on PORT :",PORT);
    });
});




//mongodb+srv://ankitroy1801_db_user:1DShCN3f4IJfdNjG@cluster0.xailteq.mongodb.net/?appName=Cluster0