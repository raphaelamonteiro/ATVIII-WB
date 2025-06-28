import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Estatistica extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="session-estatistica">
        <h2>Acessar Estatisticas</h2>
        <div className="card-estatistica">
          <div className="text-estatistica">
            <h4>Listagens</h4>
            <br />
            <div>
              <p>
                Aqui você podera acessar as listagem de clientes, produtos e
                serviços, para anáise mais detalhada clique no botão abaixo!
              </p>
            </div>
            <br />
            <Link to={"/estatistica"}>
              <button className="card-button">Painel de Controle</button>
            </Link>
          </div>
          <div className="image-estatistica"></div>
        </div>
      </div>
    );
  }
}

export default Estatistica;
