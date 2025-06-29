import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { clientes as clientesFixos } from "../../data/Clientes";
import { ICliente } from "../../types/ICliente";

import TabelaClientes from "./TabelaClientes";
import SearchBar from "../../components/SearchBar";

const ClientePage: React.FC = () => {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [filtro, setFiltro] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("Todos");

  // Carrega dados do localStorage + fixos
  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("clientes") || "[]") as ICliente[];

    const todos = [...clientesFixos];

    salvos.forEach((c) => {
      const existe = todos.some((fixo) => fixo.id === c.id);
      if (!existe) todos.push(c);
    });

    setClientes(todos);
  }, []);

  const excluirCliente = (id: string) => {
    const novos = clientes.filter((c) => c.id !== id);

    // Só salva os que não são fixos
    const apenasCustomizados = novos.filter(
      (c) => !clientesFixos.some((fixo) => fixo.id === c.id)
    );

    localStorage.setItem("clientes", JSON.stringify(apenasCustomizados));
    setClientes(novos);
  };

  const editarCliente = (cliente: ICliente) => {
    localStorage.setItem("clienteEditando", JSON.stringify(cliente));
    window.location.href = "/cadastrocliente";
  };


  const filtrarClientes = (clientes: ICliente[]): ICliente[] => {
    let filtrados = [...clientes];

    if (filtro.trim()) {
      filtrados = filtrados.filter(
        (cliente) =>
          cliente.cpf.includes(filtro) ||
          cliente.nome.toLowerCase().includes(filtro.toLowerCase())
      );
    }

    if (filtroGenero !== "Todos") {
      filtrados = filtrados.filter((cliente) => cliente.genero === filtroGenero);
    }

    return filtrados;
  };

  const clientesFiltrados = filtrarClientes(clientes);

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Clientes</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar
              placeholder="Digite o ID ou nome do Cliente"
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
          <Link to="/cadastrocliente" style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Cliente</span>
            </div>
          </Link>
        </div>
      </div>

      <TabelaClientes
        clientes={clientesFiltrados}
        filtroGenero={filtroGenero}
        setFiltroGenero={setFiltroGenero}
        onExcluir={excluirCliente}
        onEditar={editarCliente}
      />
    </div>
  );
};

export default ClientePage;
