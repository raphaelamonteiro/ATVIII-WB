
import React from "react";
import { IServico } from "../../types/IServico";

interface Props {
    servicos: IServico[];
    onExcluir: (id: string) => void;
    onEditar: (servico: IServico) => void;
}

const TabelaServicos: React.FC<Props> = ({
    servicos,
    onExcluir,
    onEditar,
}) => {
    return (
        <div className="table-component" role="region" tabIndex={0}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((servico) => (
                        <tr key={servico.id}>
                            <td>{servico.id}</td>
                            <td>{servico.nome}</td>
                            <td>{servico.descricao}</td>
                            <td>R$ {servico.valor.toFixed(2).replace(".", ",")}</td>
                            <div className="buttons">
                                <td>
                                    <div className="buttons">
                                        <button className="edit-button" onClick={() => onEditar(servico)}>Editar</button>
                                        <button className="remove-button" onClick={() => onExcluir(servico.id)}>Excluir</button>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default TabelaServicos;
