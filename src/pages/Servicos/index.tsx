import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { servicos as servicosFixos } from "../../data/Servicos";
import { IServico } from "../../types/IServico";
import SearchBar from "../../components/SearchBar";
import TabelaServicos from "./TabelaServicos";

interface State {
  servicos: IServico[];
  filtro: string;
}

class ServicosPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      servicos: [],
      filtro: "",
    };
  }

  componentDidMount() {
    const servicosLocal = JSON.parse(localStorage.getItem("servicos") || "[]") as IServico[];

    const todos = [...servicosFixos];
    servicosLocal.forEach((s) => {
      const existe = todos.some((fixo) => fixo.id === s.id);
      if (!existe) todos.push(s);
    });

    this.setState({ servicos: todos });
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  excluirServico = (id: string) => {
    const novos = this.state.servicos.filter((s) => s.id !== id);

    const apenasCustomizados = novos.filter(
      (s) => !servicosFixos.some((fixo) => fixo.id === s.id)
    );

    localStorage.setItem("servicos", JSON.stringify(apenasCustomizados));
    this.setState({ servicos: novos });
  };

  editarServico = (servico: IServico) => {
    localStorage.setItem("servicoEditando", JSON.stringify(servico));
    window.location.href = "/cadastroservico";
  };

  filtrarServicos = (): IServico[] => {
    const { servicos, filtro } = this.state;
    if (!filtro.trim()) return servicos;

    return servicos.filter(
      (s) =>
        s.id.toLowerCase().includes(filtro.toLowerCase()) ||
        s.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  render(): React.ReactNode {
    const servicosFiltrados = this.filtrarServicos();

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

        <TabelaServicos
          servicos={servicosFiltrados}
          onExcluir={this.excluirServico}
          onEditar={this.editarServico}
        />
      </div>
    );
  }
}

export default ServicosPage;
