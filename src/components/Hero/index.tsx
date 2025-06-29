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
            Aqui você encontra tudo o que precisa para cuidar dos nossos clientes e do seu dia a dia.
            Conte conosco para uma experiência leve e eficiente!
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
