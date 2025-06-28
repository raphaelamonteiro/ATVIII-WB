import React from "react";
import { ICliente } from "../../types/ICliente";

interface Props {
    clientes: ICliente[];
    filtroGenero: string;
    setFiltroGenero: (value: string) => void;
}

const TabelaClientes: React.FC<Props> = ({ clientes, filtroGenero, setFiltroGenero }) => {
    return (
        <div className="table-component" role="region" tabIndex={0}>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>
                            <div className="dropdown-filter">
                                Gênero
                                <select
                                    value={filtroGenero}
                                    onChange={(e) => setFiltroGenero(e.target.value)}
                                    className="genero-dropdown"
                                >
                                    <option value="Todos">Todos</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                        </th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.genero}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.rg}</td>
                            <td>{cliente.telefone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaClientes;
