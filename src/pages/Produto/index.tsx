import React from "react";
import { Link } from "react-router-dom";
import { produtos } from "../../data/Produtos";
import { IProduto } from "../../types/IProduto";
import SearchBar from "../../components/SearchBar";


class ProdutosPage extends React.Component {
  state: {
    produtos: IProduto[];
    filtro: string;
  } = {
      produtos: produtos,
      filtro: "",
    };

  filtrarProdutos = (produtos: IProduto[], filtro: string): IProduto[] => {
    if (!filtro) return produtos;
    return produtos.filter(
      (produto) =>
        produto.id.toLowerCase().includes(filtro.toLowerCase()) ||
        produto.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  render(): React.ReactNode {
    const { produtos, filtro } = this.state;
    const produtosFiltrados = this.filtrarProdutos(produtos, filtro);

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
              {produtosFiltrados.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao}</td>
                  <td>R$ {produto.valor.toFixed(2).replace(".", ",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProdutosPage;
