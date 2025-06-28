import React from "react";
import clientIcon from "../../assets/images/client.png";
import "./style.css";

class CadastroCliente extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-cadastro">
        <div className="title-cadastro">
          <h2>Cadastre um usuario</h2>
        </div>
        <div className="form-cadastro">
          <div className="image-client">
            <img src={clientIcon} alt="" />
          </div>
          <form action="">
            <p>Nome:</p>
            <input type="text" placeholder="Digite o nome do cliente" />
            <p>Nome Social:</p>
            <input type="text" placeholder="Digite o nome social do cliente" />
            <p>Genero:</p>
            <input type="text" placeholder="Digite o genêro do cliente" />
            <p>CPF:</p>
            <input type="number" placeholder="Digite o CPF do cliente" />
            <p>RG:</p>
            <input type="number" placeholder="Digite o RG do cliente" />
            <p>Telefone:</p>
            <input type="text" placeholder="Digite o telefone do cliente" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroCliente;
