import React from "react";
import { IServico } from "../../types/IServico";

class CadastroServico extends React.Component<{}, IServico> {
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
    const servicoEditando = localStorage.getItem("servicoEditando");
    if (servicoEditando) {
      const servico = JSON.parse(servicoEditando);
      this.setState({ ...servico });
      localStorage.removeItem("servicoEditando");
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: name === "valor" ? parseFloat(value) : value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const servicoSalvo = { ...this.state };

    if (!servicoSalvo.id) {
      servicoSalvo.id = Date.now().toString(); // Gera um ID simples
    }

    const servicos: IServico[] = JSON.parse(localStorage.getItem("servicos") || "[]");

    const index = servicos.findIndex((s) => s.id === servicoSalvo.id);
    if (index !== -1) {
      servicos[index] = servicoSalvo;
    } else {
      servicos.push(servicoSalvo);
    }

    localStorage.setItem("servicos", JSON.stringify(servicos));
    alert("Serviço salvo com sucesso!");

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
          <h2>{this.state.id ? "Editar Serviço" : "Cadastrar Serviço"}</h2>
        </div>
        <div className="form-cadastro">
          <form onSubmit={this.handleSubmit}>
            <p>Nome do Serviço:</p>
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

export default CadastroServico;
