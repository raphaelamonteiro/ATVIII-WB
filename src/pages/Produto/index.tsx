import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { produtos as produtosFixos } from "../../data/Produtos";
import { IProduto } from "../../types/IProduto";
import SearchBar from "../../components/SearchBar";
import TabelaProdutos from "./TabelaProdutos";

interface State {
  produtos: IProduto[];
  filtro: string;
}

class ProdutosPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      produtos: [],
      filtro: "",
    };
  }

  componentDidMount() {
    const produtosLocal = JSON.parse(localStorage.getItem("produtos") || "[]") as IProduto[];

    const todos = [...produtosFixos];
    produtosLocal.forEach((s) => {
      const existe = todos.some((fixo) => fixo.id === s.id);
      if (!existe) todos.push(s);
    });

    this.setState({ produtos: todos });
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  excluirProduto = (id: string) => {
    const novos = this.state.produtos.filter((s) => s.id !== id);

    const apenasCustomizados = novos.filter(
      (s) => !produtosFixos.some((fixo) => fixo.id === s.id)
    );

    localStorage.setItem("produtos", JSON.stringify(apenasCustomizados));
    this.setState({ produtos: novos });
  };

  editarProduto = (produto: IProduto) => {
    localStorage.setItem("produtoEditando", JSON.stringify(produto));
    window.location.href = "/cadastroproduto";
  };

  filtrarProdutos = (): IProduto[] => {
    const { produtos, filtro } = this.state;
    if (!filtro.trim()) return produtos;

    return produtos.filter(
      (s) =>
        s.id.toLowerCase().includes(filtro.toLowerCase()) ||
        s.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  render(): React.ReactNode {
    const produtosFiltrados = this.filtrarProdutos();

    return (
      <div className="container-tipos">
        <div className="container-cli-pro-ser">
          <h2>Produtos</h2>
          <div className="search-session">
            <div className="search-bar">
              <SearchBar
                placeholder="Digite o ID ou nome do produto"
                onChange={this.handleSearchChange}
              />
            </div>
            <Link to="/cadastroproduto" style={{ color: "inherit" }}>
              <div className="button-cadastro">
                <span>Cadastrar Produto</span>
              </div>
            </Link>
          </div>
        </div>

        <TabelaProdutos
          produtos={produtosFiltrados}
          onExcluir={this.excluirProduto}
          onEditar={this.editarProduto}
        />
      </div>
    );
  }
}

export default ProdutosPage;
