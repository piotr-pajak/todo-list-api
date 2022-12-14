import express from "express";
import indexRoutes from "./routes/index";
import cors from "cors";

const app = express();
app.use(cors(), express.json(), express.urlencoded({extended: false}), indexRoutes);

app.listen(3000);
console.log("Server is running on port: ", 3000);
