import React, { useState } from "react";
import "./style.css";
import { clientes } from "../../data/Clientes";
import { ICliente } from "../../types/ICliente";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import TabelaClientes from "./TabelaClientes";

const ClientePage: React.FC = () => {
  const [filtro, setFiltro] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("Todos");

  const filtrarClientes = (clientes: ICliente[]): ICliente[] => {
    let filtrados = clientes;
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
          <div className="search-bar"> {/* <- Adiciona isso aqui */}
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
      />
    </div>
  );
};

export default ClientePage;
