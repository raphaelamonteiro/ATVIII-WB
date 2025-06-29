import React, { useState, useEffect } from "react";
import "./style.css";
import { ICliente } from "../../types/ICliente";

const CadastroCliente: React.FC = () => {
  const [cliente, setCliente] = useState<ICliente>({
    id: "",
    nome: "",
    nomeSocial: "",
    genero: "",
    cpf: "",
    rg: "",
    telefone: ""
  });

  useEffect(() => {
    const clienteEditando = localStorage.getItem("clienteEditando");
    if (clienteEditando) {
      const cliente = JSON.parse(clienteEditando);
      setCliente(cliente);
      localStorage.removeItem("clienteEditando");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clienteSalvo = { ...cliente };

    if (!clienteSalvo.id) {
      clienteSalvo.id = Date.now().toString();
    }

    const clientes: ICliente[] = JSON.parse(localStorage.getItem("clientes") || "[]");
    const index = clientes.findIndex((c) => c.id === clienteSalvo.id);

    if (index !== -1) {
      clientes[index] = clienteSalvo;
    } else {
      clientes.push(clienteSalvo);
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Cliente salvo com sucesso!");

    setCliente({
      id: "",
      nome: "",
      nomeSocial: "",
      genero: "",
      cpf: "",
      rg: "",
      telefone: ""
    });
  };

  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>{cliente.id ? "Editar Cliente" : "Cadastrar Cliente"}</h2>
      </div>
      <div className="form-cadastro">
        <form onSubmit={handleSubmit}>
          <p>Nome:</p>
          <input name="nome" type="text" placeholder="Digite o nome do cliente" value={cliente.nome} onChange={handleChange} />
          <p>Nome Social:</p>
          <input name="nomeSocial" type="text" placeholder="Digite o nome social do cliente" value={cliente.nomeSocial} onChange={handleChange} />
          <p>Gênero:</p>
          <input name="genero" type="text" placeholder="Digite o gênero do cliente" value={cliente.genero} onChange={handleChange} />
          <p>CPF:</p>
          <input name="cpf" type="text" placeholder="Digite o CPF do cliente" value={cliente.cpf} onChange={handleChange} />
          <p>RG:</p>
          <input name="rg" type="text" placeholder="Digite o RG do cliente" value={cliente.rg} onChange={handleChange} />
          <p>Telefone:</p>
          <input name="telefone" type="text" placeholder="Digite o telefone do cliente" value={cliente.telefone} onChange={handleChange} />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;