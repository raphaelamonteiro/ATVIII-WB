import React, { useState, useEffect } from "react";
import { IServico } from "../../types/IServico";

const CadastroServico: React.FC = () => {
  const [servico, setServico] = useState<IServico>({
    id: "",
    nome: "",
    descricao: "",
    valor: 0,
  });

  useEffect(() => {
    const servicoEditando = localStorage.getItem("servicoEditando");
    if (servicoEditando) {
      const servico = JSON.parse(servicoEditando);
      setServico(servico);
      localStorage.removeItem("servicoEditando");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServico((prev) => ({
      ...prev,
      [name]: name === "valor" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const servicoSalvo = { ...servico };

    if (!servicoSalvo.id) {
      servicoSalvo.id = Date.now().toString();
    }

    const servicos: IServico[] = JSON.parse(localStorage.getItem("servicos") || "[]");
    const index = servicos.findIndex((s) => s.id === servicoSalvo.id);

    if (index !== -1) {
      servicos[index] = servicoSalvo;
    } else {
      servicos.push(servicoSalvo);
    }

    localStorage.setItem("servicos", JSON.stringify(servicos));
    alert("Serviço salvo com sucesso!");

    setServico({
      id: "",
      nome: "",
      descricao: "",
      valor: 0,
    });
  };

  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>{servico.id ? "Editar Serviço" : "Cadastrar Serviço"}</h2>
      </div>
      <div className="form-cadastro">
        <form onSubmit={handleSubmit}>
          <p>Nome do Serviço:</p>
          <input name="nome" type="text" placeholder="Nome" value={servico.nome} onChange={handleChange} />
          <p>Descrição:</p>
          <input name="descricao" type="text" placeholder="Descrição" value={servico.descricao} onChange={handleChange} />
          <p>Valor:</p>
          <input name="valor" type="number" step="0.01" placeholder="Valor" value={servico.valor} onChange={handleChange} />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroServico;