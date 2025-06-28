import React from "react";
import "./style.css";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import clientIcon from "../../assets/images/client.png";
import productsIcon from "../../assets/images/lipstick.png";
import servicesIcon from "../../assets/images/servico.png";
import Estatistica from "../../components/Estatistica";

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-home">
        <Hero />
        <div className="session-cards">
          <h2>Aqui você pode visualizar, cadastrar e editar clientes, produtos e serviços de forma prática e rápida.</h2>
          <div className="cards-container">
            <div className="card-div">
              <Card title="Clientes" image={clientIcon} link="/cliente" />
            </div>
            <div className="card-div">
              <Card title="Produtos" image={productsIcon} link="/produto" />
            </div>
            <div className="card-div">
              <Card title="Serviços" image={servicesIcon} link="/servico" />
            </div>
          </div>
        </div>
        <Estatistica />
      </div>
    );
  }
}

export default Home;
