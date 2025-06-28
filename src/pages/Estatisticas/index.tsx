// EstatisticaPage.tsx
import React from "react";
import { gerarEstatisticas } from "../../utils/gerarEstatisticas";
import "./style.css";

interface maisConsumiram_Cliente {
  id: number;
  nome: string;
  cpf: string;
  produto: string;
  servico: string;
}

class EstatisticaPage extends React.Component {
  state: {
    clientesMaisConsumiramQnt: maisConsumiram_Cliente[];
    clientesMaisConsumiramValor: maisConsumiram_Cliente[];
  } = gerarEstatisticas();

  render() {
    const { clientesMaisConsumiramQnt, clientesMaisConsumiramValor } = this.state;

    return (
      <div className="container-estatisticas">
        <h2>Estatísticas e Listagens</h2>

        <div className="title-top-10">
          <p>10 clientes que mais consumiram <b>em quantidade</b>.</p>
        </div>

        <div className="table-component-listagem" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Produtos</th>
                <th>Serviços</th>
              </tr>
            </thead>
            <tbody>
              {clientesMaisConsumiramQnt.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.produto}</td>
                  <td>{cliente.servico}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="title-top-10-valor">
          <p>5 clientes que mais consumiram <b>em valor</b>.</p>
        </div>

        <div className="table-component-listagem" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Produtos</th>
                <th>Serviços</th>
              </tr>
            </thead>
            <tbody>
              {clientesMaisConsumiramValor.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.produto}</td>
                  <td>{cliente.servico}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EstatisticaPage;
