import React from "react";
import productIcon from "../../assets/images/lipstick.png";

class CadastroProduto extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-cadastro">
        <div className="title-cadastro">
          <h2>Cadastre um produto</h2>
        </div>
        <div className="form-cadastro">
          <div className="image-user">
            <img src={productIcon} alt="" />
          </div>
          <form action="">
            <p>ID:</p>
            <input type="text" placeholder="Digite o ID do produto" />
            <p>Nome do Produto:</p>
            <input type="text" placeholder="Digite o nome do produto" />
            <p>Descriçao:</p>
            <input type="text" placeholder="Digite a descriçao do produto" />
            <p>Valor:</p>
            <input type="number" placeholder="Digite o valor do produto" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;