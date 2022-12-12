import express from "express";
import indexRoutes from "./routes/index";

const app = express();
app.use(express.json(), express.urlencoded({ extended: false }), indexRoutes);

app.listen(3000);
console.log("Server is running on port: ", 3000);
