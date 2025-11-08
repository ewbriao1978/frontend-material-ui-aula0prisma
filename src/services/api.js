import axios from 'axios';

const api = axios.create({
    baseURL:  'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function listarFuncionarios() {
    try {
        const res = await api.get('/listar');
        return res.data;
    } catch (err) {
        throw err.response?.data || err;
    }
}

export async function mostrarFuncionario(id) {
    try {
        const res = await api.get(`/mostrar/${id}`);
        return res.data;
    } catch (err) {
        throw err.response?.data || err;
    }
}   

export async function deletarFuncionario(id) {
    try {
        const res = await api.delete(`/deletar/${id}`);
        return res.data;
    } catch (err) {
        throw err.response?.data || err;
    }
}

export async function cadastrarFuncionario(payload) {
    try {
        const res = await api.post('/cadastrar', payload);
        return res.data;
    } catch (err) {
        throw err.response?.data || err;
    }
}

export async function atualizarFuncionario(id, payload) {
    try {
        const res = await api.put(`/atualizar/${id}`, payload);
        return res.data;
    } catch (err) {
        throw err.response?.data || err;
    }
}

export default {
    listarFuncionarios,
    mostrarFuncionario,
    deletarFuncionario,
    cadastrarFuncionario,
    atualizarFuncionario,
};