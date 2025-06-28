// utils/gerarEstatisticas.ts
import { clientes } from "../data/Clientes";

export function gerarEstatisticas() {
    // Simula valores para quantidade
    const clientesMaisConsumiramQnt = clientes.slice(0, 10).map((cliente, i) => ({
        id: cliente.id,
        nome: cliente.nomeSocial || cliente.nome,
        cpf: cliente.cpf,
        produto: String(Math.floor(Math.random() * 40) + 1), // entre 1 e 40
        servico: String(Math.floor(Math.random() * 25) + 1),  // entre 1 e 25
    }));

    // Simula valores para valor monetário
    const clientesMaisConsumiramValor = clientes.slice(0, 5).map((cliente) => ({
        id: cliente.id,
        nome: cliente.nomeSocial || cliente.nome,
        cpf: cliente.cpf,
        produto: `R$ ${(Math.random() * 4000 + 500).toFixed(2).replace('.', ',')}`,
        servico: `R$ ${(Math.random() * 2000 + 300).toFixed(2).replace('.', ',')}`,
    }));

    return { clientesMaisConsumiramQnt, clientesMaisConsumiramValor };
}
