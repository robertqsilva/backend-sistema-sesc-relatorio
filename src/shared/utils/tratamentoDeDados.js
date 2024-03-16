export const tratamentoDeDados = (texto) => {
  const linhas = texto.split("\n");
  const colunas = linhas.map((linha) => {
    const partes = linha.split("\t");
    const oc = partes[0];
    const descricao = partes[1];
    const empresa = partes[2];
    return [oc, descricao, empresa];
  });

  return colunas;
};
