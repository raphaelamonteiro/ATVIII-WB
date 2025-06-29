import React from "react";
import "./style.css";
import { ICliente } from "../../types/ICliente";

class CadastroCliente extends React.Component<{}, ICliente> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: "", // Vamos gerar um ID se não existir
      nome: "",
      nomeSocial: "",
      genero: "",
      cpf: "",
      rg: "",
      telefone: "",
    };
  }

  componentDidMount() {
    const clienteEditando = localStorage.getItem("clienteEditando");
    if (clienteEditando) {
      const cliente = JSON.parse(clienteEditando);
      this.setState({ ...cliente });
      localStorage.removeItem("clienteEditando");
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clienteSalvo = { ...this.state };

    if (!clienteSalvo.id) {
      clienteSalvo.id = Date.now().toString(); // Gera um ID simples
    }

    const clientes: ICliente[] = JSON.parse(localStorage.getItem("clientes") || "[]");

    const index = clientes.findIndex((c) => c.id === clienteSalvo.id);
    if (index !== -1) {
      clientes[index] = clienteSalvo;
    } else {
      clientes.push(clienteSalvo);
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Cliente salvo com sucesso!");

    this.setState({
      id: "",
      nome: "",
      nomeSocial: "",
      genero: "",
      cpf: "",
      rg: "",
      telefone: "",
    });
  };

  render(): React.ReactNode {
    return (
      <div className="container-cadastro">
        <div className="title-cadastro">
          <h2>{this.state.id ? "Editar Cliente" : "Cadastrar Cliente"}</h2>
        </div>
        <div className="form-cadastro">
          <form onSubmit={this.handleSubmit}>
            <p>Nome:</p>
            <input
              name="nome"
              type="text"
              placeholder="Digite o nome do cliente"
              value={this.state.nome}
              onChange={this.handleChange}
            />
            <p>Nome Social:</p>
            <input
              name="nomeSocial"
              type="text"
              placeholder="Digite o nome social do cliente"
              value={this.state.nomeSocial}
              onChange={this.handleChange}
            />
            <p>Gênero:</p>
            <input
              name="genero"
              type="text"
              placeholder="Digite o gênero do cliente"
              value={this.state.genero}
              onChange={this.handleChange}
            />
            <p>CPF:</p>
            <input
              name="cpf"
              type="text"
              placeholder="Digite o CPF do cliente"
              value={this.state.cpf}
              onChange={this.handleChange}
            />
            <p>RG:</p>
            <input
              name="rg"
              type="text"
              placeholder="Digite o RG do cliente"
              value={this.state.rg}
              onChange={this.handleChange}
            />
            <p>Telefone:</p>
            <input
              name="telefone"
              type="text"
              placeholder="Digite o telefone do cliente"
              value={this.state.telefone}
              onChange={this.handleChange}
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroCliente;
