type Produto = {
  id: number;
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: number;
};

export default {
  Produto: {
    precoComDesconto(produto: Produto) {
      return Math.floor(produto.preco - produto.desconto * produto.preco);
    },
  },
};
