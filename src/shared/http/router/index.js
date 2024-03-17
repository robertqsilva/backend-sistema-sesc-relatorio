import { Router } from "express";
import * as planilhaControllers from "../controllers/controllerPlanilhaExcel.js";
import multerArq from "../middlewares/multer.js";
const router = Router();

router.get("/", (req, res) => res.json("ok"));

router.post(
  "/relatorio/ocs",
  multerArq.single("arquivo"),
  planilhaControllers.relatorioEmplanilha
);

router.get("/", (req, res) => res.json("Bem vindo a api"));
export default router;
