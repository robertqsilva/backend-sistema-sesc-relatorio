import tratamentoDeDados from "./tratamentoDeDados";
import * as fs from "fs";

export const lerArquivoTxt = (arquivo) => {
  fs.readFile(arquivo, "utf8", (err, data) => {
    if (err) {
      return "error";
    }
    return tratamentoDeDados(data);
  });
};
