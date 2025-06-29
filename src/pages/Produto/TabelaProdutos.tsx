
import React from "react";
import { IProduto } from "../../types/IProduto";

interface Props {
    produtos: IProduto[];
    onExcluir: (id: string) => void;
    onEditar: (produto: IProduto) => void;
}

const TabelaProdutos: React.FC<Props> = ({
    produtos,
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
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>R$ {produto.valor.toFixed(2).replace(".", ",")}</td>
                            <div className="buttons">
                                <td>
                                    <div className="buttons">
                                        <button className="edit-button" onClick={() => onEditar(produto)}>Editar</button>
                                        <button className="remove-button" onClick={() => onExcluir(produto.id)}>Excluir</button>
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


export default TabelaProdutos;
