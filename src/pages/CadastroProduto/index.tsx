import React, { useState, useEffect } from "react";
import { IProduto } from "../../types/IProduto";

const CadastroProduto: React.FC = () => {
  const [produto, setProduto] = useState<IProduto>({
    id: "",
    nome: "",
    descricao: "",
    valor: 0,
  });

  useEffect(() => {
    const produtoEditando = localStorage.getItem("produtoEditando");
    if (produtoEditando) {
      const produto = JSON.parse(produtoEditando);
      setProduto(produto);
      localStorage.removeItem("produtoEditando");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]: name === "valor" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const produtoSalvo = { ...produto };

    if (!produtoSalvo.id) {
      produtoSalvo.id = Date.now().toString();
    }

    const produtos: IProduto[] = JSON.parse(localStorage.getItem("produtos") || "[]");
    const index = produtos.findIndex((s) => s.id === produtoSalvo.id);

    if (index !== -1) {
      produtos[index] = produtoSalvo;
    } else {
      produtos.push(produtoSalvo);
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
    alert("Produto salvo com sucesso!");

    setProduto({
      id: "",
      nome: "",
      descricao: "",
      valor: 0,
    });
  };

  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>{produto.id ? "Editar Produto" : "Cadastrar Produto"}</h2>
      </div>
      <div className="form-cadastro">
        <form onSubmit={handleSubmit}>
          <p>Nome do Produto:</p>
          <input name="nome" type="text" placeholder="Nome" value={produto.nome} onChange={handleChange} />
          <p>Descrição:</p>
          <input name="descricao" type="text" placeholder="Descrição" value={produto.descricao} onChange={handleChange} />
          <p>Valor:</p>
          <input name="valor" type="number" step="0.01" placeholder="Valor" value={produto.valor} onChange={handleChange} />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroProduto;