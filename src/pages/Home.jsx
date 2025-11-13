import { useEffect, useState } from 'react';
import api from '../services/api';
import Listar from '../components/Listar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
      const [listaFuncionarios, setListaFuncionarios] = useState([]);

  const navigate = useNavigate();

  function editHandler(id){
    // Navegar para a página de edição com o id
    navigate(`/edit/${id}`);
  }

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
}, []);

async function deleteHandler(id){
  console.log("Remover funcionário"+id);
   try{
     // Chamar a API de remoção
     api.deletarFuncionario(id);
     // Atualizar a lista localmente
     setListaFuncionarios(listaFuncionarios.filter(f=>f.id !== id));
   }catch(error){
     console.error('Erro ao deletar funcionário:', error); 
   }

}


    return (
        <>
        <div style={{ padding: 1 }}>
            <h1>Tela principal (Home) </h1>
          
        </div>
        <Listar lista={listaFuncionarios} onDelete={deleteHandler} onEdit={editHandler} />
        </>
    );
};

export default Home