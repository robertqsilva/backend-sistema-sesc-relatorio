import planilhaXlsx from "../../utils/planilha.js";

const relatorioEmplanilha = async (req, res) => {
  try {
    const arquivoTxt = req.file;
    if (!arquivoTxt) {
      return res.status(400).json({
        type: "not file",
        menssagem: "arquivo não foi enviado",
      });
    }

    if (arquivoTxt.mimetype !== "text/plain") {
      return res.status(400).json({
        type: "extension",
        mensagem:
          "Verifique se o arquivo enviado tem o extensão .txt EX: Arquivo.txt)",
      });
    }

    const planilha = await planilhaXlsx(arquivoTxt.buffer);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=dados.xlsx");

    return res.send(planilha);
  } catch (error) {
    return res.status(500).json({
      type: "server error",
      menssagem: "internal server error",
    });
  }
};

export { relatorioEmplanilha };
