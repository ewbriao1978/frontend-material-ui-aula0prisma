import React from "react";
import {useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import api from '../services/api';
import { useNavigate } from 'react-router-dom';


const Insert = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [salario, setSalario] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(event){
    event.preventDefault();
    console.log("Dados enviados: ", {nome, email, salario});
    try{
      // Chamar a API de cadastro
      const res = await api.cadastrarFuncionario({nome, email, salario});
      console.log('Funcionário cadastrado:', res);
      // Redirecionar para a página inicial
      navigate('/');
    }catch(error){
      console.error('Erro ao cadastrar funcionário:', error); 
    }
  }


    return (
        <>
        <div style={{ padding: 1 }}>
            <h1>Inserir dados</h1>

    <Box component="form" onSubmit={handleSubmit} 
        sx={{  alignItems: 'center', '& > :not(style)': { m: 1 } }}>

      <TextField
        helperText="Entre com seu nome"
        id="demo-helper-text-misaligned"
        label="Nome"
        onChange={(e)=>setNome(e.target.value)}

      />
       <TextField
        helperText="Entre com seu e-mail"
        id="demo-helper-text-misaligned"
        label="E-mail"
        onChange={(e)=>setEmail(e.target.value)}
      />
       <TextField
        helperText="Entre com seu salário"
        id="demo-helper-text-misaligned"
        label="Salário"
        onChange={(e)=>setSalario(e.target.value)}
      />
      

      <Button type= "submit" variant="contained">Cadastrar</Button>
    </Box>

            
        </div>
        </>
    );
};

export default Insert