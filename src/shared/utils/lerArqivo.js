import tratamentoDeDados from "./tratamentoDeDados.js";

const lerArquivoTxt = async (buffer) => {
  try {
    const data = buffer.toString("utf8");
    return tratamentoDeDados(data);
  } catch (err) {
    return "error";
  }
};

export default lerArquivoTxt;
