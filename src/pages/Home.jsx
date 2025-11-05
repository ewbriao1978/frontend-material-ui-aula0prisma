import { useEffect, useState } from 'react';
import api from '../services/api';
import Listar from '../components/Listar';

const Home = () => {
      const [listaFuncionarios, setListaFuncionarios] = useState([]);


async function fetchData() {
    try {
      const funcionarios = await api.listarFuncionarios();
      console.log('Funcionários:', funcionarios);
      setListaFuncionarios(funcionarios);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
    }
  }


useEffect(() => {
  // Testando a API


  

  fetchData();
}, [listaFuncionarios]);

async function deleteHandler(id){
  console.log("Remover funcionário"+id);
   try{
     // Chamar a API de remoção
     api.deletarFuncionario(id);
     // Atualizar a lista localmente
     fetchData();
   }catch(error){
     console.error('Erro ao deletar funcionário:', error); 
   }

}


    return (
        <>
        <div style={{ padding: 1 }}>
            <h1>Tela principal (Home) </h1>
          
        </div>
        <Listar lista={listaFuncionarios} onDelete={deleteHandler} />
        </>
    );
};

export default Home