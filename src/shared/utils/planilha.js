import lerArquivoTxt from "./lerArqivo.js";
import ExcelJS from "exceljs";
import dateBRL from "./formatDate.js";

const planilhaXlsx = async (buffer) => {
  const dados = await lerArquivoTxt(buffer);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Dados");

  const mergedCell = worksheet.getCell("A1");
  mergedCell.value = `RELATÓRIO DE SOLICITAÇÕES DE COMPRA - ${dateBRL()}`;
  worksheet.mergeCells("A1:C1");
  mergedCell.alignment = { vertical: "middle", horizontal: "center" };
  mergedCell.font = { size: 17, name: "arial" };

  worksheet.addTable({
    name: "Dados",
    ref: "A2",
    headerRow: true,
    totalsRow: false,
    columns: [{ name: "OC" }, { name: " RESUMO" }, { name: "UNIDADES" }],
    rows: dados,
  });

  worksheet.getRow(2).font = { name: "arial", bold: true, size: 13 };

  worksheet.eachRow((row) => {
    row.alignment = { vertical: "middle", horizontal: "center" };
    row.eachCell((cell, colNumber) => {
      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFFFFF" },
      };
      cell.alignment = {
        vertical: "middle",
        horizontal: colNumber === 1 ? "center" : "left",
      };

      if (colNumber === 2) {
        cell.alignment.wrapText = true;
      }
    });
  });

  worksheet.getColumn(1).width = 20;
  worksheet.getColumn(2).width = 100;
  worksheet.getColumn(3).width = 55;

  worksheet.getColumn(3).alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  worksheet.getCell("B2").alignment.horizontal = "center";

  worksheet.getCell("A2").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "ffe0b5" },
  };

  worksheet.getCell("B2").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "ffe0b5" },
  };

  worksheet.getCell("C2").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "ffe0b5" },
  };

  mergedCell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "fff0da" },
  };

  worksheet.eachRow((row) => {
    row.height = 40;
  });

  const planilha = await workbook.xlsx.writeBuffer();
  return planilha;
};

export default planilhaXlsx;
