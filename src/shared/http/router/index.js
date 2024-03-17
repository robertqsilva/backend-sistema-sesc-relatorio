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
export default router;
