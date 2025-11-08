import React from "react";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [salario, setSalario] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFuncionario(){
      try{
        const funcionario = await api.mostrarFuncionario(id);
        console.log('Funcionário carregado para edição:', funcionario);
        if(funcionario){
          setNome(funcionario.nome || '');
          setEmail(funcionario.email || '');
          setSalario(funcionario.salario || '');
        }
      }catch(err){
        console.error('Erro ao carregar funcionário:', err);
      }finally{
        setLoading(false);
      }
    }
    loadFuncionario();
  },[id]);

  async function handleSubmit(event){
    event.preventDefault();
    console.log('Atualizando dados: ', {nome, email, salario});
    try{
      // Chamar a API de atualização (implementar atualizarFuncionario no serviço)
      if(api.atualizarFuncionario){
        await api.atualizarFuncionario(id, { nome, email, salario });
      } else if(api.editarFuncionario){
        await api.editarFuncionario(id, { nome, email, salario });
      } else {
        // fallback: log and continue
        console.warn('Nenhuma função de atualização encontrada em api');
      }
      navigate('/');
    }catch(error){
      console.error('Erro ao atualizar funcionário:', error);
    }
  }

  if(loading) return <div>Carregando...</div>;

  return (
    <>
      <div style={{ padding: 1 }}>
        <h1>Editar dados</h1>
      </div>

      <Box component="form" onSubmit={handleSubmit}
        sx={{ alignItems: 'center', '& > :not(style)': { m: 1 } }}>

        <TextField
          helperText="Entre com seu nome"
          id="edit-nome"
          label="Nome"
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
        />
        <TextField
          helperText="Entre com seu e-mail"
          id="edit-email"
          label="E-mail"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          helperText="Entre com seu salário"
          id="edit-salario"
          label="Salário"
          value={salario}
          onChange={(e)=>setSalario(e.target.value)}
        />

        <Button type="submit" variant="contained">Atualizar</Button>
      </Box>
    </>
  );
};

export default Edit;