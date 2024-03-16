import lerArquivoTxt from "./lerArqivo";
import * as ExcelJS from "exceljs";

export const planilhaXlsx = (arquivo) => {
  const dados = lerArquivoTxt(arquivo);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Dados");

  dados.forEach((row) => {
    worksheet.addRow(row);
  });

  workbook.xlsx
    .writeFile("dados.xlsx")
    .then(() => {
      console.log("Arquivo Excel criado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao criar o arquivo Excel:", err);
    });
};
