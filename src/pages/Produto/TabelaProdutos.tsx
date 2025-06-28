
import React from "react";
import { IProduto } from "../../types/IProduto";

interface Props {
    produtos: IProduto[];
}

const TabelaProdutos: React.FC<Props> = ({ produtos }) => (
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
            {produtos.map((produto) => (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>R$ {produto.valor.toFixed(2).replace(".", ",")}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TabelaProdutos;
