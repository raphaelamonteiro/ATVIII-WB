
import React from "react";
import { IServico } from "../../types/IServico";

interface Props {
    servicos: IServico[];
}

const TabelaServicos: React.FC<Props> = ({ servicos }) => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            {servicos.map((servico) => (
                <tr key={servico.id}>
                    <td>{servico.id}</td>
                    <td>{servico.nome}</td>
                    <td>{servico.descricao}</td>
                    <td>R$ {servico.valor.toFixed(2).replace(".", ",")}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TabelaServicos;
