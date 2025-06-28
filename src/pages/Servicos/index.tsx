import React from "react";
import { Link } from "react-router-dom";
import { servicos } from "../../data/Servicos";
import { IServico } from "../../types/IServico";
import SearchBar from "../../components/SearchBar";


class ServicosPage extends React.Component {
  state: {
    servicos: IServico[];
    filtro: string;
  } = {
      servicos: servicos,
      filtro: "",
    };

  filtrarServicos = (servicos: IServico[], filtro: string): IServico[] => {
    if (!filtro) return servicos;
    return servicos.filter(
      (servico) =>
        servico.id.toLowerCase().includes(filtro.toLowerCase()) ||
        servico.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  render(): React.ReactNode {
    const { servicos, filtro } = this.state;
    const servicosFiltrados = this.filtrarServicos(servicos, filtro);

    return (
      <div className="container-tipos">
        <div className="container-cli-pro-ser">
          <h2>Serviços</h2>
          <div className="search-session">
            <div className="search-bar">
              <SearchBar
                placeholder="Digite o ID ou nome do serviço"
                onChange={this.handleSearchChange}
              />
            </div>
            <Link to="/cadastroservico" style={{ color: "inherit" }}>
              <div className="button-cadastro">
                <span>Cadastrar Serviço</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="table-component" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {servicosFiltrados.map((servico) => (
                <tr key={servico.id}>
                  <td>{servico.id}</td>
                  <td>{servico.nome}</td>
                  <td>{servico.descricao}</td>
                  <td>R$ {servico.valor.toFixed(2).replace(".", ",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ServicosPage;
