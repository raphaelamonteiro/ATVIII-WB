import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Banner extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-banner">
        <div className="text">
          <h2>World Beauty</h2>
          <p>
            Seja bem vindo ao sistema World Beauty, aqui você pode cadastrar
            seus Clientes, Produtos e servicos.
          </p>
          <Link to="/estatistica">
            <span>Painel de Controle</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Banner;
