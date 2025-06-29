import React from "react";
import { IProduto } from "../../types/IProduto";

class CadastroProduto extends React.Component<{}, IProduto> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: "",
      nome: "",
      descricao: "",
      valor: 0,
    };
  }

  componentDidMount() {
    const produtoEditando = localStorage.getItem("produtoEditando");
    if (produtoEditando) {
      const produto = JSON.parse(produtoEditando);
      this.setState({ ...produto });
      localStorage.removeItem("produtoEditando");
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: name === "valor" ? parseFloat(value) : value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const produtoSalvo = { ...this.state };

    if (!produtoSalvo.id) {
      produtoSalvo.id = Date.now().toString(); // Gera um ID simples
    }

    const produtos: IProduto[] = JSON.parse(localStorage.getItem("produtos") || "[]");

    const index = produtos.findIndex((s) => s.id === produtoSalvo.id);
    if (index !== -1) {
      produtos[index] = produtoSalvo;
    } else {
      produtos.push(produtoSalvo);
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
    alert("Produto salvo com sucesso!");

    this.setState({
      id: "",
      nome: "",
      descricao: "",
      valor: 0,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="container-cadastro">
        <div className="title-cadastro">
          <h2>{this.state.id ? "Editar Produto" : "Cadastrar Produto"}</h2>
        </div>
        <div className="form-cadastro">
          <form onSubmit={this.handleSubmit}>
            <p>Nome do Produto:</p>
            <input
              name="nome"
              type="text"
              placeholder="Nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
            <p>Descrição:</p>
            <input
              name="descricao"
              type="text"
              placeholder="Descrição"
              value={this.state.descricao}
              onChange={this.handleChange}
            />
            <p>Valor:</p>
            <input
              name="valor"
              type="number"
              step="0.01"
              placeholder="Valor"
              value={this.state.valor}
              onChange={this.handleChange}
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;
