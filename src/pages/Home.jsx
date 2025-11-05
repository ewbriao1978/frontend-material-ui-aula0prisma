import { useEffect, useState } from 'react';
import api from '../services/api';
import Listar from '../components/Listar';

const Home = () => {
      const [listaFuncionarios, setListaFuncionarios] = useState([]);

useEffect(() => {
  // Testando a API
  async function fetchData() {
    try {
      const funcionarios = await api.listarFuncionarios();
      console.log('Funcionários:', funcionarios);
      setListaFuncionarios(funcionarios);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
    }
  }

  fetchData();
}, []);


    return (
        <>
        <div style={{ padding: 1 }}>
            <h1>Tela principal (Home) </h1>
          
        </div>
        <Listar lista={listaFuncionarios} />
        </>
    );
};

export default Home