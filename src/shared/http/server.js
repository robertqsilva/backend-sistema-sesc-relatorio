import { config } from "dotenv";
config();

import express from "express";
import { router } from "./router/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log("Server is runing"));
