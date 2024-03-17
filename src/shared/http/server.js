import { config } from "dotenv";
config();

import express from "express";
import router from "./router/index.js";
import cors from "cors";
import cron from "node-cron";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 7777;

cron.schedule("*/2 * * * *", () => {
  axios
    .get("https://backend-sistema-sesc-relatorio.onrender.com/")
    .then((response) => {
      console.log("Solicitação de manutenção enviada com sucesso");
    })
    .catch((error) => {
      console.error(
        "Erro ao enviar a solicitação de manutenção:",
        error.message
      );
    });
});

app.listen(PORT);
